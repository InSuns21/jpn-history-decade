import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { findMapDefinition } from '../../maps/registry'

const labelPlacements = new Set(['right', 'left', 'top', 'bottom'])

export function ThematicMap({ mapId }: { mapId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const definition = useMemo(() => findMapDefinition(mapId), [mapId])
  const [selectedTimeSlice, setSelectedTimeSlice] = useState<string | null>(null)
  const activeTimeSlice = selectedTimeSlice ?? definition?.timeSlices?.[0]?.id ?? null
  const activeTimeSliceDefinition = definition?.timeSlices?.find((item) => item.id === activeTimeSlice)

  useEffect(() => {
    if (!containerRef.current || !definition) return

    const isVisibleAtTime = (properties: Record<string, string | number | boolean | null>) => {
      const featureTimeSlice = properties.timeSlice
      return (
        !definition.timeSlices?.length ||
        featureTimeSlice === undefined ||
        featureTimeSlice === null ||
        featureTimeSlice === '' ||
        featureTimeSlice === activeTimeSlice
      )
    }

    const map = new maplibregl.Map({
      container: containerRef.current,
      center: definition.initialView.center,
      zoom: definition.initialView.zoom,
      minZoom: 3,
      maxZoom: 13,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
          },
        },
        layers: [
          {
            id: 'modern-basemap',
            type: 'raster',
            source: 'osm',
            paint: { 'raster-opacity': 0.48, 'raster-saturation': -0.55 },
          },
        ],
      },
    })

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')

    const markers: maplibregl.Marker[] = []
    let activePopup: maplibregl.Popup | null = null

    map.once('load', () => {
      const polygonFeatures = definition.datasets.flatMap((dataset) =>
        dataset.features
          .filter(
            (feature) =>
              feature.geometry.type === 'Polygon' &&
              Array.isArray(feature.geometry.coordinates) &&
              isVisibleAtTime(feature.properties),
          )
          .map((feature) => ({
            type: 'Feature' as const,
            id: feature.id,
            properties: feature.properties,
            geometry: {
              type: 'Polygon' as const,
              coordinates: feature.geometry.coordinates as [number, number][][],
            },
          })),
      )

      if (polygonFeatures.length > 0) {
        const sourceId = `historical-areas-${definition.id}`
        map.addSource(sourceId, {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: polygonFeatures },
        })

        for (const item of definition.legend.filter((legendItem) => legendItem.kind === 'area')) {
          map.addLayer({
            id: `historical-area-fill-${definition.id}-${item.value}`,
            type: 'fill',
            source: sourceId,
            filter: ['==', ['get', 'category'], item.value],
            paint: {
              'fill-color': item.color,
              'fill-opacity': 0.16,
            },
          })
          map.addLayer({
            id: `historical-area-outline-${definition.id}-${item.value}`,
            type: 'line',
            source: sourceId,
            filter: ['==', ['get', 'category'], item.value],
            paint: {
              'line-color': item.color,
              'line-width': 2,
              'line-opacity': 0.78,
              'line-dasharray': [2, 1.5],
            },
          })
        }
      }

      const lineFeatures = definition.datasets.flatMap((dataset) =>
        dataset.features
          .filter(
            (feature) =>
              feature.geometry.type === 'LineString' &&
              Array.isArray(feature.geometry.coordinates) &&
              isVisibleAtTime(feature.properties),
          )
          .map((feature) => ({
            type: 'Feature' as const,
            id: feature.id,
            properties: feature.properties,
            geometry: {
              type: 'LineString' as const,
              coordinates: feature.geometry.coordinates as [number, number][],
            },
          })),
      )

      if (lineFeatures.length > 0) {
        const sourceId = `historical-lines-${definition.id}`
        map.addSource(sourceId, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: lineFeatures,
          },
        })

        for (const item of definition.legend.filter((legendItem) => legendItem.kind === 'line')) {
          if (item.lineStyle === 'solid') {
            map.addLayer({
              id: `historical-line-solid-${definition.id}-${item.value}`,
              type: 'line',
              source: sourceId,
              filter: ['==', ['get', 'category'], item.value],
              layout: {
                'line-cap': 'round',
                'line-join': 'round',
              },
              paint: {
                'line-color': item.color,
                'line-width': 4,
                'line-opacity': 0.9,
              },
            })
            continue
          }

          const basePaint = {
            'line-color': item.color,
            'line-width': item.value === 'port-link' ? 5 : 4.5,
            'line-opacity': 0.42,
          } as const

          map.addLayer({
            id: `historical-line-base-${definition.id}-${item.value}`,
            type: 'line',
            source: sourceId,
            filter: ['==', ['get', 'category'], item.value],
            layout: {
              'line-cap': 'round',
              'line-join': 'round',
            },
            paint: basePaint,
          })

          map.addLayer({
            id: `historical-line-dash-${definition.id}-${item.value}`,
            type: 'line',
            source: sourceId,
            filter: ['==', ['get', 'category'], item.value],
            layout: {
              'line-cap': 'round',
              'line-join': 'round',
            },
            paint: {
              'line-color': item.color,
              'line-width': item.value === 'port-link' ? 3.2 : 2.8,
              'line-opacity': 1,
              'line-dasharray': item.value === 'port-link' ? [1.2, 1.2] : [2.2, 1.6],
            },
          })
        }
      }

      for (const dataset of definition.datasets) {
        for (const feature of dataset.features) {
          if (
            feature.geometry.type !== 'Point' ||
            !Array.isArray(feature.geometry.coordinates) ||
            !isVisibleAtTime(feature.properties)
          ) continue

          const [longitude, latitude] = feature.geometry.coordinates
          if (typeof longitude !== 'number' || typeof latitude !== 'number') continue

          const category = String(feature.properties.category ?? '')
          const legend = definition.legend.find((item) => item.value === category)
          if (!legend) continue

          const label = String(feature.properties.label ?? '')
          const year = String(feature.properties.year ?? '')
          const detail = String(feature.properties.detail ?? '')
          const requestedPlacement = String(feature.properties.labelPlacement ?? 'right')
          const labelPlacement = labelPlacements.has(requestedPlacement) ? requestedPlacement : 'right'

          const markerButton = document.createElement('button')
          markerButton.type = 'button'
          markerButton.className = `historical-map-marker historical-map-marker--${labelPlacement}`
          markerButton.style.setProperty('--marker-color', legend.color)
          markerButton.setAttribute(
            'aria-label',
            [label, year, legend.label, detail].filter(Boolean).join('・'),
          )

          const markerIcon = document.createElement('span')
          markerIcon.className = 'historical-map-marker__icon'
          markerIcon.textContent = legend.marker

          const markerLabel = document.createElement('span')
          markerLabel.className = 'historical-map-marker__label'
          markerLabel.textContent = label

          markerButton.append(markerIcon, markerLabel)

          const popupBody = document.createElement('div')
          popupBody.className = 'historical-map-popup'

          const title = document.createElement('strong')
          title.textContent = label
          popupBody.appendChild(title)

          const meta = document.createElement('span')
          meta.textContent = [year, legend.label].filter(Boolean).join(' / ')
          popupBody.appendChild(meta)

          const paragraph = document.createElement('p')
          paragraph.textContent = detail
          popupBody.appendChild(paragraph)

          const popup = new maplibregl.Popup({
            offset: 24,
            maxWidth: '320px',
            closeButton: true,
            closeOnClick: true,
          })
            .setLngLat([longitude, latitude])
            .setDOMContent(popupBody)

          const marker = new maplibregl.Marker({ element: markerButton, anchor: 'center' })
            .setLngLat([longitude, latitude])
            .setPopup(popup)
            .addTo(map)

          const openPopup = () => {
            if (activePopup && activePopup !== popup) activePopup.remove()
            if (!popup.isOpen()) popup.addTo(map)
            activePopup = popup
          }

          markerButton.addEventListener('click', (event) => {
            event.stopPropagation()
            openPopup()
          })

          markerButton.addEventListener(
            'touchend',
            (event) => {
              event.preventDefault()
              event.stopPropagation()
              openPopup()
            },
            { passive: false },
          )

          markers.push(marker)
        }
      }
    })

    return () => {
      activePopup?.remove()
      for (const marker of markers) marker.remove()
      map.remove()
    }
  }, [definition, activeTimeSlice])

  if (!definition) return null

  const underAudit =
    definition.status !== 'published' ||
    (definition.auditState.visualAudit !== 'passed' &&
      definition.auditState.visualAudit !== 'not-required-reused-pattern')

  return (
    <figure className="thematic-map">
      {underAudit && (
        <div className="thematic-map__audit-notice" role="status">
          <strong>監査中です</strong>
          <span>地図のデータ・表現・操作性を確認中です。内容は監査により修正される場合があります。</span>
        </div>
      )}
      {definition.timeSlices?.length ? (
        <div className="thematic-map__time-control" aria-label="地図の時点">
          <div className="thematic-map__time-buttons">
            {definition.timeSlices.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === activeTimeSlice ? 'is-active' : undefined}
                aria-pressed={item.id === activeTimeSlice}
                onClick={() => setSelectedTimeSlice(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          {activeTimeSliceDefinition && (
            <p className="thematic-map__time-description">{activeTimeSliceDefinition.description}</p>
          )}
        </div>
      ) : null}
      <div
        ref={containerRef}
        className="thematic-map__canvas"
        role="img"
        aria-label={definition.title}
      />
      <div className="thematic-map__legend" aria-label="凡例">
        {definition.legend.map((item) => (
          <span key={item.value}>
            <i
              className={
                item.kind === 'line'
                  ? `is-line ${item.lineStyle === 'solid' ? 'is-solid' : ''}`
                  : item.kind === 'area'
                    ? 'is-area'
                    : undefined
              }
              style={{ '--legend-color': item.color } as CSSProperties}
            >
              {item.kind === 'line' || item.kind === 'area' ? '' : item.marker}
            </i>
            {item.label}
          </span>
        ))}
      </div>
      <figcaption>
        <strong>{definition.title}</strong>
        <span>{definition.historicalQuestion}</span>
        {definition.readingNote && <span>{definition.readingNote}</span>}
      </figcaption>
    </figure>
  )
}
