import { useEffect, useState } from 'react'
import { findPeriod, getPeriodNeighbors, periods } from './content-model/registry'
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
  const match = route.match(/^\/(?:period|decade)\/([a-z0-9-]+)(?:\/terms\/([a-z0-9-]+))?$/)
  const { SiteLayout, HomeTemplate, PeriodTemplate, NotFoundTemplate } = activeTemplate

  let content = <NotFoundTemplate />

  if (route === '/') {
    content = <HomeTemplate periods={periods} />
  } else if (match) {
    const routeKey = match[1]
    const termId = match[2]
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
          activeTermId={termId}
        />
      )
    }
  }

  return <SiteLayout periods={periods}>{content}</SiteLayout>
}
