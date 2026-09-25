import { useEffect, useMemo, useRef, type CSSProperties } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { findMapDefinition } from '../../maps/registry'

const labelPlacements = new Set(['right', 'left', 'top', 'bottom'])

export function ThematicMap({ mapId }: { mapId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const definition = useMemo(() => findMapDefinition(mapId), [mapId])

  useEffect(() => {
    if (!containerRef.current || !definition) return

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

    let lineOverlay: SVGSVGElement | null = null
    let renderLineOverlay: (() => void) | null = null

    map.once('load', () => {
      const lineFeatures = definition.datasets.flatMap((dataset) =>
        dataset.features
          .filter(
            (feature) =>
              feature.geometry.type === 'LineString' &&
              Array.isArray(feature.geometry.coordinates),
          )
          .map((feature) => ({
            id: feature.id,
            category: String(feature.properties.category ?? ''),
            coordinates: feature.geometry.coordinates as [number, number][],
          })),
      )

      if (lineFeatures.length > 0 && containerRef.current) {
        const svgNamespace = 'http://www.w3.org/2000/svg'
        lineOverlay = document.createElementNS(svgNamespace, 'svg')
        lineOverlay.classList.add('historical-map-lines')
        lineOverlay.setAttribute('aria-hidden', 'true')
        containerRef.current.appendChild(lineOverlay)

        const paths = lineFeatures.flatMap((feature) => {
          const legend = definition.legend.find((item) => item.value === feature.category)
          if (!legend) return []

          const basePath = document.createElementNS(svgNamespace, 'path')
          basePath.dataset.featureId = feature.id
          basePath.dataset.category = feature.category
          basePath.setAttribute('fill', 'none')
          basePath.setAttribute('stroke', legend.color)
          basePath.setAttribute('stroke-width', feature.category === 'port-link' ? '5' : '4.5')
          basePath.setAttribute('stroke-opacity', '0.56')
          basePath.setAttribute('stroke-linecap', 'round')
          basePath.setAttribute('stroke-linejoin', 'round')

          const dashPath = document.createElementNS(svgNamespace, 'path')
          dashPath.dataset.featureId = feature.id
          dashPath.dataset.category = feature.category
          dashPath.setAttribute('fill', 'none')
          dashPath.setAttribute('stroke', legend.color)
          dashPath.setAttribute('stroke-width', feature.category === 'port-link' ? '3.2' : '2.8')
          dashPath.setAttribute('stroke-opacity', '1')
          dashPath.setAttribute('stroke-linecap', 'round')
          dashPath.setAttribute('stroke-linejoin', 'round')
          dashPath.setAttribute(
            'stroke-dasharray',
            feature.category === 'port-link' ? '5 5' : '9 6',
          )

          lineOverlay?.append(basePath, dashPath)
          return [
            { path: basePath, coordinates: feature.coordinates },
            { path: dashPath, coordinates: feature.coordinates },
          ]
        })

        renderLineOverlay = () => {
          if (!lineOverlay || !containerRef.current) return

          const width = containerRef.current.clientWidth
          const height = containerRef.current.clientHeight
          lineOverlay.setAttribute('width', String(width))
          lineOverlay.setAttribute('height', String(height))
          lineOverlay.setAttribute('viewBox', `0 0 ${width} ${height}`)

          for (const item of paths) {
            const d = item.coordinates
              .map(([longitude, latitude], index) => {
                const point = map.project([longitude, latitude])
                return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`
              })
              .join(' ')
            item.path.setAttribute('d', d)
          }
        }

        renderLineOverlay()
        map.on('move', renderLineOverlay)
        map.on('resize', renderLineOverlay)
      }

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
      if (renderLineOverlay) {
        map.off('move', renderLineOverlay)
        map.off('resize', renderLineOverlay)
      }
      lineOverlay?.remove()
      map.remove()
    }
  }, [definition])

  if (!definition) return null

  const underAudit =
    definition.status !== 'published' || definition.auditState.visualAudit !== 'passed'

  return (
    <figure className="thematic-map">
      {underAudit && (
        <div className="thematic-map__audit-notice" role="status">
          <strong>監査中です</strong>
          <span>地図のデータ・表現・操作性を確認中です。内容は監査により修正される場合があります。</span>
        </div>
      )}
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
              className={item.kind === 'line' ? 'is-line' : undefined}
              style={{ '--legend-color': item.color } as CSSProperties}
            >
              {item.kind === 'line' ? '' : item.marker}
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
