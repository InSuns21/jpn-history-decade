import type { ReactNode } from 'react'

interface SiteShellProps {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
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
          <nav className="site-nav" aria-label="主要ナビゲーション">
            <a href="#/">トップ</a>
            <a href="#/decade/1800">1800年代</a>
          </nav>
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
