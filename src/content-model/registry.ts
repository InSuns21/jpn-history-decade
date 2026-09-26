import { compiledContent } from '../generated/content.generated'
import type { CrosscuttingPageData, PeriodPageData } from './types'

export const periods: PeriodPageData[] = [...compiledContent.periods].sort(
  (left, right) => left.startYear - right.startYear,
)

export const crosscutting: CrosscuttingPageData[] = [...compiledContent.crosscutting].sort(
  (left, right) => left.id.localeCompare(right.id),
)

export function findPeriod(routeKey: string) {
  return periods.find((period) => period.routeKey === routeKey)
}

export function getPeriodNeighbors(routeKey: string) {
  const index = periods.findIndex((period) => period.routeKey === routeKey)

  return {
    previous: index > 0 ? periods[index - 1] : undefined,
    next: index >= 0 && index < periods.length - 1 ? periods[index + 1] : undefined,
  }
}

export function findCrosscutting(kind: CrosscuttingPageData['kind'], routeKey: string) {
  return crosscutting.find((page) => page.kind === kind && page.routeKey === routeKey)
}

export function getRelatedCrosscutting(routeKey: string) {
  return crosscutting.filter((page) => page.relatedPeriods.includes(routeKey))
}
