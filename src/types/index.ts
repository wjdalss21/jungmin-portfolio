export type WorkKind = 'project' | 'research'

export type WorkCategory = 'ai' | 'data' | 'ux'

export type CoverTone = 'navy' | 'accent' | 'mint' | 'paper'

export interface WorkCover {
  tone: CoverTone
  image?: string
  imageAlt?: string
  // object-position 값, 기본 top
  imagePosition?: string
}

export interface ApproachStep {
  title: string
  body: string
}

export interface StackItem {
  name: string
  reason: string
  usage: string
}

export interface GalleryImage {
  src: string
  caption: string
}

export interface Contribution {
  area: string
  percent: number
}

export interface Publication {
  title: string
  authors: string
  venue: string
  date: string
  url?: string
}

export interface TroubleShooting {
  title: string
  problem: string
  approach: string
  result: string
}

export interface WorkDetail {
  overview: string[]
  problem: string[]
  approach: ApproachStep[]
  // 접근 방법 대신 쓸 섹션 제목 (예: 내 역할, 주요 기능)
  approachTitle?: string
  flow?: string[]
  // 사용한 전체 기술 목록 (배지로 표시)
  tools?: string[]
  stack?: StackItem[]
  gallery?: GalleryImage[]
  troubleshooting?: TroubleShooting[]
  publications?: Publication[]
  results: string[]
  nextSteps?: ApproachStep[]
  retrospective: string[]
}

export interface Work {
  slug: string
  kind: WorkKind
  category?: WorkCategory
  title: string
  summary: string
  period: string
  team: string
  role: string
  venue?: string
  award?: string
  tags: string[]
  cover: WorkCover
  isPrivate?: boolean
  featured?: boolean
  contribution: Contribution[] | null
  // 외부에서 직접 써볼 수 있는 서비스 링크
  liveUrl?: string
  repoUrl?: string
  detail?: WorkDetail
}

export interface PublicationEntry {
  year: string
  title: string
  venue: string
  date: string
  note?: string
  href?: string
  url?: string
}

export interface Credential {
  title: string
  issuer: string
  date: string
  note?: string
}

export interface SkillGroup {
  name: string
  items: StackItem[]
}

export type Lang = 'ko' | 'en'

export interface WhyQuestion {
  question: string
  project: string
  href: string
}

export interface LabeledValue {
  label: string
  value: string
}

export interface ProfileContent {
  name: string
  role: string
  school: string
  headline: string[]
  intro: string
  email: string
  github: string
  githubLabel: string
  whyQuestions: WhyQuestion[]
  highlights: LabeledValue[]
  aboutTitle: string[]
  aboutParagraphs: string[]
  metrics: LabeledValue[]
  publications: PublicationEntry[]
  skillGroups: SkillGroup[]
  awards: Credential[]
  certificates: Credential[]
  activities: Credential[]
  contactTitle: string
  contactBody: string
}

export interface SiteContent {
  profile: ProfileContent
  works: Work[]
}
