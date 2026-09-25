import { useEffect, useState } from 'react'
import { DecadePage } from './components/DecadePage'
import { SiteShell } from './components/SiteShell'
import { decades } from './data/decades'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function normalizeHash(hash: string) {
  const route = hash.replace(/^#/, '') || '/'
  return route.startsWith('/') ? route : `/${route}`
}

function useHashRoute() {
  const [route, setRoute] = useState(() => normalizeHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setRoute(normalizeHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route])

  return route
}

export function App() {
  const route = useHashRoute()
  const match = route.match(/^\/decade\/(\d{4})$/)

  let content = <NotFoundPage />

  if (route === '/') {
    content = <HomePage />
  } else if (match) {
    const year = Number(match[1])
    const decade = decades.find((item) => item.year === year)
    if (decade) content = <DecadePage data={decade} />
  }

  return <SiteShell>{content}</SiteShell>
}
