import { compiledContent } from '../generated/content.generated'
import periodAliases from '../../content/period-route-aliases.json'
import type { CrosscuttingPageData, PeriodPageData } from './types'

export const periods: PeriodPageData[] = [...compiledContent.periods].sort(
  (left, right) =>
    left.startDate.localeCompare(right.startDate) || left.routeKey.localeCompare(right.routeKey),
)

export const crosscutting: CrosscuttingPageData[] = [...compiledContent.crosscutting].sort(
  (left, right) => left.id.localeCompare(right.id),
)

export function resolvePeriodRouteKey(routeKey: string) {
  const alias = (periodAliases as Record<string, { target: string }>)[routeKey]
  return alias?.target ?? routeKey
}

export function findPeriod(routeKey: string) {
  const canonical = resolvePeriodRouteKey(routeKey)
  return periods.find((period) => period.routeKey === canonical)
}

export function getPeriodNeighbors(routeKey: string) {
  const index = periods.findIndex((period) => period.routeKey === resolvePeriodRouteKey(routeKey))

  return {
    previous: index > 0 ? periods[index - 1] : undefined,
    next: index >= 0 && index < periods.length - 1 ? periods[index + 1] : undefined,
  }
}

export function findCrosscutting(kind: CrosscuttingPageData['kind'], routeKey: string) {
  return crosscutting.find((page) => page.kind === kind && page.routeKey === routeKey)
}

export function getRelatedCrosscutting(routeKey: string) {
  return crosscutting.filter((page) => page.relatedPeriods.includes(resolvePeriodRouteKey(routeKey)))
}
