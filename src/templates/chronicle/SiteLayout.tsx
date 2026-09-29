import { useEffect, useState } from 'react'
import type { SiteLayoutProps } from '../types'

type TextSize = 'standard' | 'large' | 'xlarge'

const TEXT_SIZE_STORAGE_KEY = 'jpn-history-text-size'
const TEXT_SIZE_OPTIONS = [
  { value: 'standard', label: '標準' },
  { value: 'large', label: '大' },
  { value: 'xlarge', label: '特大' },
] as const satisfies ReadonlyArray<{ value: TextSize; label: string }>

function isTextSize(value: string | null): value is TextSize {
  return TEXT_SIZE_OPTIONS.some((option) => option.value === value)
}

function getInitialTextSize(): TextSize {
  try {
    const stored = window.localStorage.getItem(TEXT_SIZE_STORAGE_KEY)
    return isTextSize(stored) ? stored : 'standard'
  } catch {
    return 'standard'
  }
}

export function SiteLayout({ children, periods, crosscutting }: SiteLayoutProps) {
  const firstPeriod = periods[0]
  const [textSize, setTextSize] = useState<TextSize>(getInitialTextSize)

  useEffect(() => {
    document.documentElement.dataset.textSize = textSize

    try {
      window.localStorage.setItem(TEXT_SIZE_STORAGE_KEY, textSize)
    } catch {
      // The visual setting still works for the current page when storage is unavailable.
    }
  }, [textSize])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#/" aria-label="トップへ戻る">
            <span className="brand__year">1800</span>
            <span>
              <strong>1800年から始める日本史</strong>
              <small>年代ごとに見る社会のしくみと変化</small>
            </span>
          </a>
          <div className="site-header__actions">
            <nav className="site-nav" aria-label="主要ナビゲーション">
              <a href="#/">トップ</a>
              {firstPeriod && <a href={'#/period/' + firstPeriod.routeKey}>{firstPeriod.navLabel}</a>}
              {crosscutting[0] && (
                <a href={'#/' + crosscutting[0].kind + '/' + crosscutting[0].routeKey}>横断</a>
              )}
            </nav>
            <div className="text-size-control" role="group" aria-label="文字サイズ">
              <span className="text-size-control__label">文字</span>
              {TEXT_SIZE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={textSize === option.value ? 'is-active' : undefined}
                  aria-pressed={textSize === option.value}
                  onClick={() => setTextSize(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <strong>1800年から始める日本史</strong>
          <p>政治・経済・社会・外交・文化・地理を年代ごとにたどる日本史サイト。</p>
        </div>
      </footer>
    </div>
  )
}
