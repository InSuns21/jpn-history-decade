import { compiledContent } from '../generated/content.generated'
import type { PeriodPageData } from './types'

export const periods: PeriodPageData[] = [...compiledContent.periods].sort(
  (left, right) => left.startYear - right.startYear,
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
