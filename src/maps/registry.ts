import { validateMapData } from './audit/validateData.ts'
import { validateMapStyle } from './audit/validateStyle.ts'
import { bakumatsuEarlyContact1853Map } from './definitions/bakumatsuEarlyContact1853.ts'
import { treatyPortsTransport1859Map } from './definitions/treatyPortsTransport1859.ts'
import { boshinWar1868Map } from './definitions/boshinWar1868.ts'
import { shizokuRebellionsSeinan1874Map } from './definitions/shizokuRebellionsSeinan1874.ts'
import { urbanPopulation1920Map } from './definitions/urbanPopulation1920.ts'
import { urbanPopulation1930Map } from './definitions/urbanPopulation1930.ts'
import { manchurianIncident1931Map } from './definitions/manchurianIncident1931.ts'
import { february26Tokyo1936Map } from './definitions/february26Tokyo1936.ts'
import { nomonhan1939TimelineMap } from './definitions/nomonhan1939Timeline.ts'
import { northernIndochinaAdvance1940Map } from './definitions/northernIndochinaAdvance1940.ts'
import { thaiIndochinaMediation1941Map } from './definitions/thaiIndochinaMediation1941.ts'
import { francoThaiPeaceTreaty1941Map } from './definitions/francoThaiPeaceTreaty1941.ts'
import { matsuokaParallelDiplomacy1941Map } from './definitions/matsuokaParallelDiplomacy1941.ts'
import { southernIndochinaBases1941Map } from './definitions/southernIndochinaBases1941.ts'
import { oilSupplyConstraintSouthwardSpace1941Map } from './definitions/oilSupplyConstraintSouthwardSpace1941.ts'
import { southernOperationPreparation1941Map } from './definitions/southernOperationPreparation1941.ts'
import { finalDiplomacyOperationalPreparation1941Map } from './definitions/finalDiplomacyOperationalPreparation1941.ts'
import { openingMultifrontOperations1941Map } from './definitions/openingMultifrontOperations1941.ts'
import { railwayExpansion1872To1890Map } from './definitions/railwayExpansion1872To1890.ts'
import { sinoRussoJapaneseWarTheatersMap } from './definitions/sinoRussoJapaneseWarTheaters.ts'
import { firstWorldWarEastAsiaPacificMap } from './definitions/firstWorldWarEastAsiaPacific.ts'
import { shandongManchuria1927To1928Map } from './definitions/shandongManchuria1927To1928.ts'
import { lugouqiaoInitial1937Map } from './definitions/lugouqiaoInitial1937.ts'
import { shanghaiUrban1937Map } from './definitions/shanghaiUrban1937.ts'
import { hangzhouBayLanding1937Map } from './definitions/hangzhouBayLanding1937.ts'
import { shanghaiNanjingAdvance1937Map } from './definitions/shanghaiNanjingAdvance1937.ts'
import { nanjingSafetyZone1937Map } from './definitions/nanjingSafetyZone1937.ts'
import { xuzhouRail1938Map } from './definitions/xuzhouRail1938.ts'
import { yellowRiverFlood1938Map } from './definitions/yellowRiverFlood1938.ts'
import { wuhanGuangdongSupply1938Map } from './definitions/wuhanGuangdongSupply1938.ts'
import { hainanSupply1939Map } from './definitions/hainanSupply1939.ts'
import type { HistoricalMapDefinition } from './schema.ts'

export const mapDefinitions: HistoricalMapDefinition[] = [
  bakumatsuEarlyContact1853Map,
  treatyPortsTransport1859Map,
  boshinWar1868Map,
  shizokuRebellionsSeinan1874Map,
  urbanPopulation1920Map,
  urbanPopulation1930Map,
  manchurianIncident1931Map,
  february26Tokyo1936Map,
  nomonhan1939TimelineMap,
  northernIndochinaAdvance1940Map,
  thaiIndochinaMediation1941Map,
  francoThaiPeaceTreaty1941Map,
  matsuokaParallelDiplomacy1941Map,
  southernIndochinaBases1941Map,
  oilSupplyConstraintSouthwardSpace1941Map,
  southernOperationPreparation1941Map,
  finalDiplomacyOperationalPreparation1941Map,
  openingMultifrontOperations1941Map,
  railwayExpansion1872To1890Map,
  sinoRussoJapaneseWarTheatersMap,
  firstWorldWarEastAsiaPacificMap,
  shandongManchuria1927To1928Map,
  lugouqiaoInitial1937Map,
  shanghaiUrban1937Map,
  hangzhouBayLanding1937Map,
  shanghaiNanjingAdvance1937Map,
  nanjingSafetyZone1937Map,
  xuzhouRail1938Map,
  yellowRiverFlood1938Map,
  wuhanGuangdongSupply1938Map,
  hainanSupply1939Map,
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
