#!/usr/bin/env python3
import argparse
import json
from pathlib import Path

import fiona
from fiona.transform import transform_geom


TARGETS = {
    "R001": {
        "name": "東海道",
        "category": "road-axis",
        "label": "東海道",
        "detail": "CODH『江戸主要街道データセット』R001。江戸から京都までの東海道の地理形状。",
    },
    "R600": {
        "name": "京街道",
        "category": "road-axis",
        "label": "京街道",
        "detail": "CODH『江戸主要街道データセット』R600。京都方面から大坂へ至る京街道（大坂街道）の地理形状。",
    },
    "R900": {
        "name": "長崎街道",
        "category": "road-axis",
        "label": "長崎街道",
        "detail": "CODH『江戸主要街道データセット』R900。大里から長崎までの長崎街道の地理形状。",
    },
}


def scalar(value):
    if value is None or isinstance(value, (str, int, float, bool)):
        return value
    return str(value)


def route_ids_from_properties(properties):
    values = {str(v).strip() for v in properties.values() if v is not None}
    found = set()
    for route_id in TARGETS:
        if any(value == route_id or value.startswith(route_id + "-") for value in values):
            found.add(route_id)
    return found


def flatten_lines(geometry):
    if geometry["type"] == "LineString":
        return [geometry["coordinates"]]
    if geometry["type"] == "MultiLineString":
        return list(geometry["coordinates"])
    return []


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("gpkg")
    parser.add_argument("output")
    args = parser.parse_args()

    gpkg = Path(args.gpkg)
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)

    collected = {route_id: [] for route_id in TARGETS}
    source_layers = set()

    for layer in fiona.listlayers(gpkg):
        with fiona.open(gpkg, layer=layer) as src:
            for feature in src:
                props = dict(feature["properties"])
                matches = route_ids_from_properties(props)
                if not matches or not feature.get("geometry"):
                    continue

                geom = transform_geom(src.crs, "EPSG:4326", feature["geometry"])
                line_parts = flatten_lines(geom)
                if not line_parts:
                    continue

                for route_id in matches:
                    for coordinates in line_parts:
                        collected[route_id].append(
                            {
                                "coordinates": coordinates,
                                "source_layer": layer,
                            }
                        )
                    source_layers.add(layer)

    missing = [route_id for route_id, parts in collected.items() if not parts]
    if missing:
        raise SystemExit(
            "Could not find route geometry for: "
            + ", ".join(missing)
            + ". Layers: "
            + ", ".join(fiona.listlayers(gpkg))
        )

    features = []
    for route_id, parts in collected.items():
        meta = TARGETS[route_id]
        for index, part in enumerate(parts, start=1):
            features.append(
                {
                    "type": "Feature",
                    "id": f"codh-{route_id}-{index:03d}",
                    "properties": {
                        "routeId": route_id,
                        "name": meta["name"],
                        "category": meta["category"],
                        "label": meta["label"],
                        "detail": meta["detail"],
                        "sourceLayer": part["source_layer"],
                    },
                    "geometry": {
                        "type": "LineString",
                        "coordinates": part["coordinates"],
                    },
                }
            )

    feature_collection = {
        "type": "FeatureCollection",
        "name": "A2 historical roads from CODH Edo Major Road Dataset v4",
        "source": "ROIS-DS Center for Open Data in the Humanities (CODH)",
        "sourceUrl": "https://codh.rois.ac.jp/historical-gis/edo-road/",
        "doi": "10.20676/00000452",
        "license": "CC BY 4.0",
        "routeIds": list(TARGETS.keys()),
        "sourceLayers": sorted(source_layers),
        "features": features,
    }

    output.write_text(
        json.dumps(feature_collection, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )

    summary = {route_id: len(parts) for route_id, parts in collected.items()}
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    main()
