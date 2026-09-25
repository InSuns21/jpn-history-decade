export type ContentStatus = 'draft' | 'review' | 'published'

export interface SnapshotItem {
  label: string
  value: string
  note?: string
}

export interface HistorySection {
  id: string
  title: string
  lead: string
  points: string[]
  questions?: string[]
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
  essayPoint: string
  requiredForEssay?: boolean
}

export interface DecadePageData {
  year: number
  period: string
  eraLabel: string
  status: ContentStatus
  title: string
  summary: string
  framingQuestion: string
  snapshot: SnapshotItem[]
  sections: HistorySection[]
  changes: ChangeItem[]
  contemporaryAssumptions: string[]
  nextIssues: string[]
  glossary: GlossaryTerm[]
  sourceNotes: string[]
  mapCandidate?: {
    title: string
    purpose: string
  }
}
