import { validateMapData } from './audit/validateData.ts'
import { validateMapStyle } from './audit/validateStyle.ts'
import type { HistoricalMapDefinition } from './schema.ts'

export const mapDefinitions: HistoricalMapDefinition[] = []

export function validateHistoricalMapDefinition(definition: HistoricalMapDefinition) {
  const errors = [...validateMapData(definition), ...validateMapStyle(definition)]

  if (definition.status === 'published') {
    if (definition.auditState.dataAudit !== 'passed') {
      errors.push(definition.id + ': published map requires passed Data Audit')
    }
    if (definition.auditState.styleAudit !== 'passed') {
      errors.push(definition.id + ': published map requires passed Style Audit')
    }
    if (definition.auditState.visualAudit !== 'passed') {
      errors.push(definition.id + ': published map requires passed Human Visual Audit')
    }
  }

  return errors
}

export function validateMapRegistry(definitions: HistoricalMapDefinition[] = mapDefinitions) {
  const errors: string[] = []
  const ids = new Set<string>()

  for (const definition of definitions) {
    if (ids.has(definition.id)) errors.push('duplicate map id: ' + definition.id)
    ids.add(definition.id)
    errors.push(...validateHistoricalMapDefinition(definition))
  }

  return errors
}
