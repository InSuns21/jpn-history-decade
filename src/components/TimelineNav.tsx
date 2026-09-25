const entries = [1800, 1810, 1820, 1830, 1840, 1850]

interface TimelineNavProps {
  activeYear?: number
}

export function TimelineNav({ activeYear }: TimelineNavProps) {
  return (
    <nav className="timeline-nav" aria-label="年代ナビゲーション">
      {entries.map((year) => {
        const ready = year === 1800
        const active = year === activeYear
        return ready ? (
          <a
            key={year}
            className={active ? 'timeline-nav__item is-active' : 'timeline-nav__item'}
            href={`#/decade/${year}`}
          >
            <span>{year}</span>
            <small>{active ? '表示中' : '読む'}</small>
          </a>
        ) : (
          <span key={year} className="timeline-nav__item is-planned" aria-label={`${year}年代 準備中`}>
            <span>{year}</span>
            <small>準備中</small>
          </span>
        )
      })}
    </nav>
  )
}
