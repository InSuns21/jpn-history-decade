import { validateMapData } from './audit/validateData.ts'
import { validateMapStyle } from './audit/validateStyle.ts'
import { bakumatsuEarlyContact1853Map } from './definitions/bakumatsuEarlyContact1853.ts'
import { treatyPortsTransport1859Map } from './definitions/treatyPortsTransport1859.ts'
import { boshinWar1868Map } from './definitions/boshinWar1868.ts'
import { shizokuRebellionsSeinan1874Map } from './definitions/shizokuRebellionsSeinan1874.ts'
import { urbanPopulation1920Map } from './definitions/urbanPopulation1920.ts'
import { urbanPopulation1930Map } from './definitions/urbanPopulation1930.ts'
import { manchurianIncident1931Map } from './definitions/manchurianIncident1931.ts'
import type { HistoricalMapDefinition } from './schema.ts'

export const mapDefinitions: HistoricalMapDefinition[] = [
  bakumatsuEarlyContact1853Map,
  treatyPortsTransport1859Map,
  boshinWar1868Map,
  shizokuRebellionsSeinan1874Map,
  urbanPopulation1920Map,
  urbanPopulation1930Map,
  manchurianIncident1931Map,
]

export function findMapDefinition(id: string) {
  return mapDefinitions.find((definition) => definition.id === id)
}

export function validateHistoricalMapDefinition(definition: HistoricalMapDefinition) {
  const errors = [...validateMapData(definition), ...validateMapStyle(definition)]

  if (definition.status === 'published') {
    if (definition.auditState.dataAudit !== 'passed') {
      errors.push(definition.id + ': published map requires passed Data Audit')
    }
    if (definition.auditState.styleAudit !== 'passed') {
      errors.push(definition.id + ': published map requires passed Style Audit')
    }
    if (
      definition.auditState.visualAudit !== 'passed' &&
      definition.auditState.visualAudit !== 'not-required-reused-pattern'
    ) {
      errors.push(definition.id + ': published map requires passed Human Visual Audit or an allowed reused-pattern exemption')
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
