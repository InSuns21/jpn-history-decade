import { useEffect, useState } from 'react'
import {
  crosscutting,
  findCrosscutting,
  findPeriod,
  getPeriodNeighbors,
  getRelatedCrosscutting,
  periods,
} from './content-model/registry'
import { activeTemplate } from './templates'

function normalizeHash(hash: string) {
  const route = hash.replace(/^#/, '') || '/'
  return route.startsWith('/') ? route : '/' + route
}

function parseHashRoute(hash: string) {
  const normalized = normalizeHash(hash)
  const queryIndex = normalized.indexOf('?')
  const pathname = queryIndex >= 0 ? normalized.slice(0, queryIndex) : normalized
  const params = new URLSearchParams(queryIndex >= 0 ? normalized.slice(queryIndex + 1) : '')
  return {
    pathname,
    sectionId: params.get('section') ?? undefined,
  }
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return parseHashRoute(hash)
}

export function App() {
  const { pathname: route, sectionId } = useHashRoute()
  const periodMatch = route.match(/^\/(?:period|decade)\/([a-z0-9-]+)(?:\/terms\/([a-z0-9-]+))?$/)
  const crosscuttingMatch = route.match(/^\/(structure|theme)\/([a-z0-9-]+)(?:\/terms\/([a-z0-9-]+))?$/)
  const {
    SiteLayout,
    HomeTemplate,
    PeriodTemplate,
    CrosscuttingTemplate,
    NotFoundTemplate,
  } = activeTemplate

  let content = <NotFoundTemplate />

  if (route === '/') {
    content = <HomeTemplate periods={periods} crosscutting={crosscutting} />
  } else if (periodMatch) {
    const routeKey = periodMatch[1]
    const termId = periodMatch[2]
    const period = findPeriod(routeKey)
    const termExists = !termId || period?.glossary.some((item) => item.id === termId)

    if (period && termExists) {
      const neighbors = getPeriodNeighbors(routeKey)
      content = (
        <PeriodTemplate
          data={period}
          periods={periods}
          previous={neighbors.previous}
          next={neighbors.next}
          relatedCrosscutting={getRelatedCrosscutting(routeKey)}
          activeTermId={termId}
          activeSectionId={sectionId}
        />
      )
    }
  } else if (crosscuttingMatch) {
    const kind = crosscuttingMatch[1] as 'structure' | 'theme'
    const routeKey = crosscuttingMatch[2]
    const termId = crosscuttingMatch[3]
    const page = findCrosscutting(kind, routeKey)
    const termExists = !termId || page?.glossary.some((item) => item.id === termId)

    if (page && termExists) {
      content = <CrosscuttingTemplate data={page} periods={periods} activeTermId={termId} activeSectionId={sectionId} />
    }
  }

  return (
    <SiteLayout periods={periods} crosscutting={crosscutting}>
      {content}
    </SiteLayout>
  )
}
