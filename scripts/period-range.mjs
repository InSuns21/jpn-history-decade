const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/

function padYear(year) {
  return String(year).padStart(4, '0')
}

export function startOfYear(year) {
  return padYear(year) + '-01-01'
}

export function endOfYear(year) {
  return padYear(year) + '-12-31'
}

export function assertIsoDate(value, label = 'date') {
  if (typeof value !== 'string') {
    throw new Error(label + ' must be a YYYY-MM-DD string')
  }

  const match = value.match(ISO_DATE_PATTERN)
  if (!match) {
    throw new Error(label + ' must use YYYY-MM-DD format: ' + value)
  }

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(Date.UTC(year, month - 1, day))

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw new Error(label + ' is not a valid calendar date: ' + value)
  }

  return value
}

export function yearFromIsoDate(value) {
  assertIsoDate(value)
  return Number(value.slice(0, 4))
}

export function nextIsoDate(value) {
  assertIsoDate(value)
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  date.setUTCDate(date.getUTCDate() + 1)
  return (
    padYear(date.getUTCFullYear()) +
    '-' +
    String(date.getUTCMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getUTCDate()).padStart(2, '0')
  )
}

export function normalizePeriodRange({ startYear, endYear, startDate, endDate }) {
  const normalizedStartDate = startDate ?? startOfYear(startYear)
  const normalizedEndDate = endDate ?? endOfYear(endYear)

  assertIsoDate(normalizedStartDate, 'startDate')
  assertIsoDate(normalizedEndDate, 'endDate')

  if (yearFromIsoDate(normalizedStartDate) !== startYear) {
    throw new Error(
      'startDate year must match startYear (' + startYear + '): ' + normalizedStartDate,
    )
  }
  if (yearFromIsoDate(normalizedEndDate) !== endYear) {
    throw new Error('endDate year must match endYear (' + endYear + '): ' + normalizedEndDate)
  }
  if (normalizedStartDate > normalizedEndDate) {
    throw new Error('startDate must be <= endDate')
  }

  return {
    startDate: normalizedStartDate,
    endDate: normalizedEndDate,
  }
}

export function classifyContinuity(previousEndDate, currentStartDate) {
  assertIsoDate(previousEndDate, 'previous endDate')
  assertIsoDate(currentStartDate, 'current startDate')

  const expectedStartDate = nextIsoDate(previousEndDate)
  if (currentStartDate === expectedStartDate) {
    return { kind: 'contiguous', expectedStartDate }
  }
  if (currentStartDate < expectedStartDate) {
    return { kind: 'overlap', expectedStartDate }
  }
  return { kind: 'gap', expectedStartDate }
}
