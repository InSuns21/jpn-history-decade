import type { ComponentType, ReactNode } from 'react'
import type { PeriodPageData } from '../content-model/types'

export interface SiteLayoutProps {
  children: ReactNode
  periods: PeriodPageData[]
}

export interface HomeTemplateProps {
  periods: PeriodPageData[]
}

export interface PeriodTemplateProps {
  data: PeriodPageData
  periods: PeriodPageData[]
  previous?: PeriodPageData
  next?: PeriodPageData
  activeTermId?: string
}

export interface TemplateDefinition {
  SiteLayout: ComponentType<SiteLayoutProps>
  HomeTemplate: ComponentType<HomeTemplateProps>
  PeriodTemplate: ComponentType<PeriodTemplateProps>
  NotFoundTemplate: ComponentType
}
