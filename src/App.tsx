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

function useHashRoute() {
  const [route, setRoute] = useState(() => normalizeHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setRoute(normalizeHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export function App() {
  const route = useHashRoute()
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
      content = <CrosscuttingTemplate data={page} periods={periods} activeTermId={termId} />
    }
  }

  return (
    <SiteLayout periods={periods} crosscutting={crosscutting}>
      {content}
    </SiteLayout>
  )
}
