export type ContentStatus = 'draft' | 'review' | 'published'

export interface SnapshotItem {
  label: string
  value: string
  note?: string
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'subheading'; text: string }

export interface HistoricalSection {
  id: string
  title: string
  blocks: ContentBlock[]
  questions: string[]
}

export interface ChangeItem {
  label: string
  before: string
  current: string
  significance: string
}

export interface GlossaryTerm {
  id: string
  term: string
  category: string
  definition: string
  connections: string
  core: boolean
  periodNote?: string
}

export interface SourceDefinition {
  id: string
  type: 'primary' | 'official' | 'research' | 'overview'
  title: string
  institution?: string
  author?: string
  url?: string
}

export interface PeriodPageData {
  id: string
  routeKey: string
  startYear: number
  endYear: number
  navLabel: string
  periodLabel: string
  previousPeriodLabel: string
  currentPeriodLabel: string
  eraLabel: string
  status: ContentStatus
  title: string
  summary: string
  framingQuestion: string
  snapshot: SnapshotItem[]
  sections: HistoricalSection[]
  changes: ChangeItem[]
  contemporaryAssumptions: string[]
  nextIssues: string[]
  glossary: GlossaryTerm[]
  sources: SourceDefinition[]
  maps: string[]
}

export interface CompiledSiteContent {
  periods: PeriodPageData[]
}
