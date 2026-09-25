import {
  mapDefinitions,
  validateHistoricalMapDefinition,
  validateMapRegistry,
} from '../src/maps/registry.ts'

function assertIncludes(errors, fragment, label) {
  if (!errors.some((error) => error.includes(fragment))) {
    console.error('Map audit self-test failed (' + label + '): expected "' + fragment + '"')
    console.error(errors)
    process.exit(1)
  }
}

const registryErrors = validateMapRegistry(mapDefinitions)
if (registryErrors.length > 0) {
  console.error('Map registry validation failed:')
  for (const error of registryErrors) console.error('- ' + error)
  process.exit(1)
}

const base = {
  id: 'audit-fixture',
  title: '監査フィクスチャ',
  historicalQuestion: '監査条件が機能するか',
  status: 'draft',
  period: { startYear: 1850, endYear: 1854 },
  initialView: { center: [139.7, 35.7], zoom: 5 },
  datasets: [
    {
      id: 'points',
      provenance: {
        sourceId: 'fixture-source',
        title: 'Fixture source',
        sourceType: 'official',
        license: 'test-only',
        temporalCoverage: { from: '1852', to: '1852', basis: 'instant' },
        geometryConfidence: 'verified',
        transformations: [],
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker'],
      features: [
        {
          id: 'feature-1',
          geometry: { type: 'Point', coordinates: [139.7, 35.7] },
          properties: { category: 'port', marker: '港' },
        },
      ],
    },
  ],
  layers: [{ id: 'ports', datasetId: 'points', categories: ['port'] }],
  legend: [{ value: 'port', label: '港', marker: '港', color: '#37624f' }],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
  },
}

const unpublishedHuman = structuredClone(base)
unpublishedHuman.status = 'published'
assertIncludes(
  validateHistoricalMapDefinition(unpublishedHuman),
  'Human Visual Audit',
  'published visual audit gate',
)

const badProvenance = structuredClone(base)
badProvenance.status = 'published'
badProvenance.auditState.visualAudit = 'passed'
badProvenance.datasets[0].provenance.license = ''
badProvenance.datasets[0].provenance.temporalCoverage = { basis: 'unknown' }
const provenanceErrors = validateHistoricalMapDefinition(badProvenance)
assertIncludes(provenanceErrors, 'license is required', 'license')
assertIncludes(provenanceErrors, 'temporalCoverage basis unknown', 'temporal coverage')

const badFeatures = structuredClone(base)
badFeatures.datasets[0].features.push({
  id: 'feature-1',
  geometry: { type: 'Point', coordinates: [999, 35.7] },
  properties: { category: 'port', marker: '港' },
})
const featureErrors = validateHistoricalMapDefinition(badFeatures)
assertIncludes(featureErrors, 'duplicate feature id', 'duplicate feature id')
assertIncludes(featureErrors, 'longitude is out of range', 'coordinate range')

const badView = structuredClone(base)
badView.initialView.center = [181, 35.7]
assertIncludes(validateHistoricalMapDefinition(badView), 'longitude is out of range', 'initial view')

const badStyle = structuredClone(base)
badStyle.layers[0].categories = ['fort']
assertIncludes(validateHistoricalMapDefinition(badStyle), 'category is missing from legend', 'legend')

const badLegend = structuredClone(base)
badLegend.legend[0].marker = ''
assertIncludes(validateHistoricalMapDefinition(badLegend), 'legend marker is required', 'marker cue')

console.log(
  'Map audit validation passed: ' +
    mapDefinitions.length +
    ' registered map(s); audit guard self-tests passed.',
)
