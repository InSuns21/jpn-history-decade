import type {
  HistoricalMapDataset,
  HistoricalMapDefinition,
  HistoricalMapFeature,
  MapDataProvenance,
} from '../schema.ts'

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== ''
}

function yearFromTemporal(value?: string) {
  if (!value) return undefined
  const match = value.match(/^(\\d{4})/)
  return match ? Number(match[1]) : undefined
}

function validateCoordinateTree(coordinates: unknown, path: string, errors: string[]) {
  if (!Array.isArray(coordinates) || coordinates.length === 0) {
    errors.push(path + ': coordinates must be a non-empty array')
    return
  }

  if (typeof coordinates[0] === 'number') {
    const longitude = coordinates[0]
    const latitude = coordinates[1]
    if (typeof longitude !== 'number' || typeof latitude !== 'number') {
      errors.push(path + ': coordinate pair must contain longitude and latitude numbers')
      return
    }
    if (longitude < -180 || longitude > 180) errors.push(path + ': longitude is out of range')
    if (latitude < -90 || latitude > 90) errors.push(path + ': latitude is out of range')
    return
  }

  coordinates.forEach((child, index) => validateCoordinateTree(child, path + '[' + index + ']', errors))
}

export function validateProvenance(
  provenance: MapDataProvenance,
  mapStatus: HistoricalMapDefinition['status'],
  path: string,
) {
  const errors: string[] = []

  if (!isNonEmptyString(provenance.sourceId)) errors.push(path + ': sourceId is required')
  if (!isNonEmptyString(provenance.title)) errors.push(path + ': title is required')
  if (!isNonEmptyString(provenance.license)) errors.push(path + ': license is required')
  if (!['primary', 'official', 'research', 'derived'].includes(provenance.sourceType)) {
    errors.push(path + ': sourceType is invalid')
  }
  if (!['verified', 'derived', 'approximate', 'schematic'].includes(provenance.geometryConfidence)) {
    errors.push(path + ': geometryConfidence is required')
  }
  if (!provenance.temporalCoverage || !['instant', 'range', 'approximate', 'unknown'].includes(provenance.temporalCoverage.basis)) {
    errors.push(path + ': temporalCoverage is required')
  }
  if (provenance.sourceType === 'derived') {
    if (!provenance.derivedFromSourceIds?.length) errors.push(path + ': derived data requires derivedFromSourceIds')
    if (!provenance.transformations?.length) errors.push(path + ': derived data requires transformation history')
  }
  if (mapStatus === 'published' && provenance.temporalCoverage?.basis === 'unknown') {
    errors.push(path + ': published maps cannot use temporalCoverage basis unknown')
  }

  return errors
}

function validateFeature(
  feature: HistoricalMapFeature,
  dataset: HistoricalMapDataset,
  path: string,
) {
  const errors: string[] = []
  if (!isNonEmptyString(feature.id)) errors.push(path + ': feature id is required')
  if (!dataset.allowedGeometryTypes.includes(feature.geometry.type)) {
    errors.push(path + ': geometry type ' + feature.geometry.type + ' is not allowed by dataset')
  }
  validateCoordinateTree(feature.geometry.coordinates, path + '.geometry', errors)
  for (const property of dataset.requiredProperties) {
    if (!(property in feature.properties) || feature.properties[property] === null) {
      errors.push(path + ': required property is missing: ' + property)
    }
  }
  return errors
}

export function validateMapData(definition: HistoricalMapDefinition) {
  const errors: string[] = []

  if (definition.period.startYear > definition.period.endYear) {
    errors.push(definition.id + ': map period startYear must be <= endYear')
  }

  validateCoordinateTree(definition.initialView.center, definition.id + '.initialView.center', errors)
  if (!Number.isFinite(definition.initialView.zoom) || definition.initialView.zoom < 0 || definition.initialView.zoom > 22) {
    errors.push(definition.id + ': initialView.zoom must be between 0 and 22')
  }

  for (const dataset of definition.datasets) {
    const path = definition.id + '/' + dataset.id
    errors.push(...validateProvenance(dataset.provenance, definition.status, path + '.provenance'))

    const ids = new Set<string>()
    for (const feature of dataset.features) {
      if (ids.has(feature.id)) errors.push(path + ': duplicate feature id: ' + feature.id)
      ids.add(feature.id)
      errors.push(...validateFeature(feature, dataset, path + '/' + feature.id))
    }

    const coverage = dataset.provenance.temporalCoverage
    if (coverage.basis !== 'unknown') {
      const from = yearFromTemporal(coverage.from)
      const to = yearFromTemporal(coverage.to) ?? from
      if (from === undefined) {
        errors.push(path + ': temporalCoverage.from must begin with a four-digit year')
      } else if (to !== undefined && (to < definition.period.startYear || from > definition.period.endYear)) {
        errors.push(path + ': dataset temporal coverage does not overlap the map period')
      }
    }
  }

  return errors
}
