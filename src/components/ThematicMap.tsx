import { useEffect, useRef } from 'react'
import { Map, NavigationControl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

interface ThematicMapProps {
  title: string
  description: string
  styleUrl: string
  center: [number, number]
  zoom?: number
  onLoad?: (map: Map) => void
}

export function ThematicMap({
  title,
  description,
  styleUrl,
  center,
  zoom = 5,
  onLoad,
}: ThematicMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const map = new Map({
      container: containerRef.current,
      style: styleUrl,
      center,
      zoom,
    })

    map.addControl(new NavigationControl(), 'top-right')
    map.on('load', () => onLoad?.(map))

    return () => map.remove()
  }, [center, onLoad, styleUrl, zoom])

  return (
    <figure className="thematic-map" aria-label={title}>
      <div ref={containerRef} className="thematic-map__canvas" />
      <figcaption>
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  )
}
