export type AuditResult = 'pending' | 'passed' | 'failed'
export type VisualAuditResult = 'pending-human' | 'passed' | 'failed'

export interface MapAuditState {
  dataAudit: AuditResult
  styleAudit: AuditResult
  visualAudit: VisualAuditResult
  notes?: string[]
}
