import assert from 'node:assert/strict'
import {
  classifyContinuity,
  nextIsoDate,
  normalizePeriodRange,
} from './period-range.mjs'

assert.deepEqual(
  normalizePeriodRange({ startYear: 1930, endYear: 1930 }),
  { startDate: '1930-01-01', endDate: '1930-12-31' },
  'legacy year-only periods must normalize without frontmatter changes',
)

assert.deepEqual(
  normalizePeriodRange({
    startYear: 1931,
    endYear: 1931,
    startDate: '1931-01-01',
    endDate: '1931-09-17',
  }),
  { startDate: '1931-01-01', endDate: '1931-09-17' },
  'explicit subannual ranges must be preserved',
)

assert.deepEqual(
  classifyContinuity('1931-09-17', '1931-09-18'),
  { kind: 'contiguous', expectedStartDate: '1931-09-18' },
  'same-year split periods must be contiguous by day',
)

assert.equal(nextIsoDate('1932-02-28'), '1932-02-29', 'leap days must be handled')
assert.equal(classifyContinuity('1931-09-17', '1931-09-19').kind, 'gap')
assert.equal(classifyContinuity('1931-09-17', '1931-09-17').kind, 'overlap')

assert.throws(
  () =>
    normalizePeriodRange({
      startYear: 1931,
      endYear: 1931,
      startDate: '1930-12-31',
      endDate: '1931-09-17',
    }),
  /startDate year must match startYear/,
)

assert.throws(
  () =>
    normalizePeriodRange({
      startYear: 1931,
      endYear: 1931,
      startDate: '1931-02-30',
      endDate: '1931-09-17',
    }),
  /not a valid calendar date/,
)

console.log('Period range validation fixtures passed.')
