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
            <span className="brand__year">1800→</span>
            <span>
              <strong>日本史 decade</strong>
              <small>社会構造を10年ごとに読む</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="主要ナビゲーション">
            <a href="#/">概要</a>
            <a href="#/decade/1800">1800年代</a>
            <a href="https://github.com/InSuns21/jpn-history-decade">GitHub</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <strong>jpn-history-decade</strong>
          <p>事件の列ではなく、社会システムの状態遷移として日本史を読む。</p>
        </div>
        <a href="https://github.com/InSuns21/jpn-history-decade/blob/main/plan/JPN_HISTORY_DECADE_PLAN.md">
          企画書
        </a>
      </footer>
    </div>
  )
}
