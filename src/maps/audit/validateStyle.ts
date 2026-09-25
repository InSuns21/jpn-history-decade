import type { HistoricalMapDefinition } from '../schema.ts'

export function validateMapStyle(definition: HistoricalMapDefinition) {
  const errors: string[] = []
  const datasetIds = new Set(definition.datasets.map((dataset) => dataset.id))
  const legendValues = new Set(definition.legend.map((item) => item.value))
  const layerCategories = new Set<string>()

  for (const layer of definition.layers) {
    if (!datasetIds.has(layer.datasetId)) {
      errors.push(definition.id + '/' + layer.id + ': layer references unknown dataset ' + layer.datasetId)
    }

    for (const category of layer.categories ?? []) {
      layerCategories.add(category)
      if (!legendValues.has(category)) {
        errors.push(definition.id + '/' + layer.id + ': category is missing from legend: ' + category)
      }
    }
  }

  for (const value of legendValues) {
    if (layerCategories.size > 0 && !layerCategories.has(value)) {
      errors.push(definition.id + ': legend value is not used by any layer category: ' + value)
    }
  }

  return errors
}
