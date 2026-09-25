import { useEffect, useMemo, useRef, type CSSProperties } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { findMapDefinition } from '../../maps/registry'

export function ThematicMap({ mapId }: { mapId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const definition = useMemo(() => findMapDefinition(mapId), [mapId])

  useEffect(() => {
    if (!containerRef.current || !definition || definition.status !== 'published') return

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
    const popups: maplibregl.Popup[] = []

    map.once('load', () => {
      for (const dataset of definition.datasets) {
        for (const feature of dataset.features) {
          if (feature.geometry.type !== 'Point' || !Array.isArray(feature.geometry.coordinates)) continue

          const [longitude, latitude] = feature.geometry.coordinates
          if (typeof longitude !== 'number' || typeof latitude !== 'number') continue

          const category = String(feature.properties.category ?? '')
          const legend = definition.legend.find((item) => item.value === category)
          if (!legend) continue

          const label = String(feature.properties.label ?? '')
          const year = String(feature.properties.year ?? '')
          const detail = String(feature.properties.detail ?? '')

          const markerButton = document.createElement('button')
          markerButton.type = 'button'
          markerButton.className = 'historical-map-marker'
          markerButton.textContent = legend.marker
          markerButton.style.setProperty('--marker-color', legend.color)
          markerButton.setAttribute('aria-label', [label, year, legend.label].filter(Boolean).join('・'))

          markerButton.addEventListener('click', () => {
            for (const popup of popups) popup.remove()

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

            const popup = new maplibregl.Popup({ offset: 22, maxWidth: '300px' })
              .setLngLat([longitude, latitude])
              .setDOMContent(popupBody)
              .addTo(map)

            popups.push(popup)
          })

          const marker = new maplibregl.Marker({ element: markerButton, anchor: 'center' })
            .setLngLat([longitude, latitude])
            .addTo(map)
          markers.push(marker)
        }
      }
    })

    return () => {
      for (const popup of popups) popup.remove()
      for (const marker of markers) marker.remove()
      map.remove()
    }
  }, [definition])

  if (!definition || definition.status !== 'published') return null

  return (
    <figure className="thematic-map">
      <div
        ref={containerRef}
        className="thematic-map__canvas"
        role="img"
        aria-label={definition.title}
      />
      <div className="thematic-map__legend" aria-label="凡例">
        {definition.legend.map((item) => (
          <span key={item.value}>
            <i style={{ '--legend-color': item.color } as CSSProperties}>{item.marker}</i>
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
