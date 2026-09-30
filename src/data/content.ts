import type { Lang, SiteContent, Work } from '../types'
import { PROFILE_KO } from './ko/profile'
import { WORKS_KO } from './ko/works'
import { PROFILE_EN } from './en/profile'
import { WORKS_EN } from './en/works'

export const CONTENT: Record<Lang, SiteContent> = {
  ko: { profile: PROFILE_KO, works: WORKS_KO },
  en: { profile: PROFILE_EN, works: WORKS_EN },
}

export const workPath = (w: Work) => `/${w.kind === 'project' ? 'projects' : 'research'}/${w.slug}`
