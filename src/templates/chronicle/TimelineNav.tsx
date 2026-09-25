import type { PeriodPageData } from '../../content-model/types'

interface TimelineNavProps {
  periods: PeriodPageData[]
  activeRouteKey?: string
}

export function TimelineNav({ periods, activeRouteKey }: TimelineNavProps) {
  return (
    <nav className="timeline-nav" aria-label="年代ナビゲーション">
      {periods.map((period) => {
        const active = period.routeKey === activeRouteKey
        return (
          <a
            key={period.id}
            className={active ? 'timeline-nav__item is-active' : 'timeline-nav__item'}
            href={'#/period/' + period.routeKey}
          >
            <span>{period.navLabel}</span>
            <small>{active ? '表示中' : period.periodLabel}</small>
          </a>
        )
      })}
    </nav>
  )
}
