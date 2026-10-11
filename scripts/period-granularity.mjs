import { assertIsoDate } from './period-range.mjs'

export const GATE_START = '1943-05-09'
export const SHORT_THRESHOLD_DAYS = 14
const REQUIRED = ['stateChange', 'standaloneQuestion', 'mergeCost']
const MIN_REASON_LENGTH = 30

export function inclusiveDays(startDate, endDate) {
  assertIsoDate(startDate, 'startDate')
  assertIsoDate(endDate, 'endDate')
  const a = Date.parse(startDate + 'T00:00:00Z')
  const b = Date.parse(endDate + 'T00:00:00Z')
  if (b < a) throw new Error('endDate must follow startDate')
  return Math.round((b - a) / 86400000) + 1
}

export function checkGranularity(period) {
  const errors = []
  const { status, startDate, endDate, granularityDecision } = period
  const days = inclusiveDays(startDate, endDate)
  const gated = status === 'published' && startDate >= GATE_START && days < SHORT_THRESHOLD_DAYS

  // Historical pages are grandfathered; drafts need no publication justification.
  if (!gated && granularityDecision === undefined) return { days, gated, errors }
  if (!granularityDecision || typeof granularityDecision !== 'object' || Array.isArray(granularityDecision)) {
    errors.push('granularityDecision must be an object with stateChange, standaloneQuestion, and mergeCost')
    return { days, gated, errors }
  }
  for (const field of REQUIRED) {
    const value = granularityDecision[field]
    if (typeof value !== 'string' || [...value.trim()].length < MIN_REASON_LENGTH) {
      errors.push('granularityDecision.' + field + ' must contain at least ' + MIN_REASON_LENGTH + ' characters')
    }
  }
  return { days, gated, errors }
}
