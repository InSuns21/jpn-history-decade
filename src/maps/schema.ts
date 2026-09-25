import type { MapAuditState } from './audit/auditTypes.ts'

export type MapSourceType = 'primary' | 'official' | 'research' | 'derived'
export type TemporalBasis = 'instant' | 'range' | 'approximate' | 'unknown'
export type GeometryConfidence = 'verified' | 'derived' | 'approximate' | 'schematic'
export type HistoricalGeometryType = 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon'

export interface MapDataProvenance {
  sourceId: string
  title: string
  institution?: string
  author?: string
  url?: string
  sourceType: MapSourceType
  license: string
  derivedFromSourceIds?: string[]
  temporalCoverage: {
    from?: string
    to?: string
    basis: TemporalBasis
    note?: string
  }
  spatialCoverage?: string
  geometryConfidence: GeometryConfidence
  transformations: string[]
  notes?: string
}

export interface HistoricalMapFeature {
  id: string
  geometry: {
    type: HistoricalGeometryType
    coordinates: unknown
  }
  properties: Record<string, string | number | boolean | null>
}

export interface HistoricalMapDataset {
  id: string
  provenance: MapDataProvenance
  allowedGeometryTypes: HistoricalGeometryType[]
  requiredProperties: string[]
  features: HistoricalMapFeature[]
}

export interface MapLayerDefinition {
  id: string
  datasetId: string
  categoryProperty?: string
  categories?: string[]
}

export interface MapLegendItem {
  value: string
  label: string
  marker: string
  color: string
}

export interface HistoricalMapDefinition {
  id: string
  title: string
  historicalQuestion: string
  readingNote?: string
  status: 'draft' | 'published'
  period: {
    startYear: number
    endYear: number
  }
  initialView: {
    center: [number, number]
    zoom: number
  }
  datasets: HistoricalMapDataset[]
  layers: MapLayerDefinition[]
  legend: MapLegendItem[]
  auditState: MapAuditState
}
