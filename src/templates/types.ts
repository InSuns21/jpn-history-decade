import type { ComponentType, ReactNode } from 'react'
import type { CrosscuttingPageData, PeriodPageData } from '../content-model/types'

export interface SiteLayoutProps {
  children: ReactNode
  periods: PeriodPageData[]
  crosscutting: CrosscuttingPageData[]
}

export interface HomeTemplateProps {
  periods: PeriodPageData[]
  crosscutting: CrosscuttingPageData[]
}

export interface PeriodTemplateProps {
  data: PeriodPageData
  periods: PeriodPageData[]
  previous?: PeriodPageData
  next?: PeriodPageData
  relatedCrosscutting: CrosscuttingPageData[]
  activeTermId?: string
}

export interface CrosscuttingTemplateProps {
  data: CrosscuttingPageData
  periods: PeriodPageData[]
  activeTermId?: string
}

export interface TemplateDefinition {
  SiteLayout: ComponentType<SiteLayoutProps>
  HomeTemplate: ComponentType<HomeTemplateProps>
  PeriodTemplate: ComponentType<PeriodTemplateProps>
  CrosscuttingTemplate: ComponentType<CrosscuttingTemplateProps>
  NotFoundTemplate: ComponentType
}
