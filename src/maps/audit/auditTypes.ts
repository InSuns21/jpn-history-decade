export type AuditResult = 'pending' | 'passed' | 'failed'
export type VisualAuditResult = 'pending-human' | 'passed' | 'failed' | 'not-required-reused-pattern'

export interface MapAuditState {
  dataAudit: AuditResult
  styleAudit: AuditResult
  visualAudit: VisualAuditResult
  notes?: string[]
}
