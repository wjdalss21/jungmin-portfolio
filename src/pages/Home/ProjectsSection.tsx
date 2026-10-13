import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CalendarBlank,
  ChartBar,
  LockSimple,
  MagnifyingGlass,
  Robot,
  SquaresFour,
  Trophy,
  type Icon,
} from '@phosphor-icons/react'
import Reveal from '@/components/Reveal'
import WorkCover from '@/components/WorkCover'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { workPath } from '@/data/content'
import { useLang } from '@/i18n/useLang'
import type { Work, WorkCategory } from '@/types'

// 대표 프로젝트: 넓은 칸과 좁은 칸이 줄마다 엇갈리는 비대칭 그리드
const FEATURED_LAYOUT = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
  'lg:col-span-7',
  'lg:col-span-5',
]

const FILTERS: { key: 'all' | WorkCategory; icon: Icon }[] = [
  { key: 'all', icon: SquaresFour },
  { key: 'ai', icon: Robot },
  { key: 'data', icon: ChartBar },
  { key: 'ux', icon: MagnifyingGlass },
]

function WorkMeta({ work }: { work: Work }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
      <span className="inline-flex items-center gap-1.5 tabular-nums">
        <CalendarBlank size={16} weight="duotone" aria-hidden="true" />
        {work.period}
      </span>
      {work.award && (
        <Badge variant="award">
          <Trophy size={14} weight="duotone" aria-hidden="true" />
          {work.award}
        </Badge>
      )}
    </div>
  )
}

function FeaturedCard({ work }: { work: Work }) {
  const { t } = useLang()
  const body = (
    <>
      <WorkCover work={work} size="lg" className="h-52 w-full sm:h-64 md:h-80 lg:h-[22rem]" />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <WorkMeta work={work} />
          <h3 className="mt-2 text-xl font-bold tracking-tight text-ink md:text-2xl">{work.title}</h3>
          <p className="mt-2 max-w-[48ch] leading-relaxed">{work.summary}</p>
        </div>
        {work.isPrivate ? (
          <LockSimple size={22} className="mt-1 shrink-0 text-muted" aria-label={t.projects.private} />
        ) : (
          <ArrowUpRight
            size={22}
            className="mt-1 shrink-0 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </div>
    </>
  )

  if (work.isPrivate || !work.detail) return <div>{body}</div>
  return (
    <Link to={workPath(work)} className="group block">
      {body}
    </Link>
  )
}

function MoreCard({ work }: { work: Work }) {
  return (
    <Link
      to={workPath(work)}
      className="group flex h-full flex-col rounded-card bg-surface p-6 ring-1 ring-inset ring-line/10 transition-transform duration-300 hover:-translate-y-1"
    >
      <WorkMeta work={work} />
      <h4 className="mt-4 text-lg font-bold leading-snug tracking-tight text-ink">{work.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed">{work.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Link>
  )
}

export default function ProjectsSection() {
  const { works, t } = useLang()
  const featured = works.filter((w) => w.kind === 'project' && w.featured)
  const more = works.filter((w) => w.kind === 'project' && !w.featured)

  return (
    <section id="projects" className="section border-t border-line/10">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="mt-4 max-w-[60ch] text-lg">{t.projects.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-12 md:mt-14 md:gap-y-16 lg:grid-cols-12">
          {featured.map((work, i) => (
            <Reveal key={work.slug} delay={(i % 2) * 0.08} className={FEATURED_LAYOUT[i] ?? 'lg:col-span-6'}>
              <FeaturedCard work={work} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-24">
          <Tabs defaultValue="all">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-bold tracking-tight text-ink">{t.projects.more}</h3>
              {/* 모바일은 한 줄 가로 스크롤, 데스크톱은 기본 배치 */}
              <TabsList
                aria-label={t.projects.more}
                className="no-scrollbar -mx-4 w-[calc(100%+2rem)] flex-nowrap justify-start overflow-x-auto rounded-none bg-transparent px-4 ring-0 md:mx-0 md:w-auto md:rounded-full md:bg-surface md:px-1 md:ring-1"
              >
                {FILTERS.map(({ key, icon: FilterIcon }) => (
                  <TabsTrigger key={key} value={key}>
                    <FilterIcon size={16} weight="duotone" aria-hidden="true" />
                    {t.projects.filters[key]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {FILTERS.map(({ key }) => {
              const list = key === 'all' ? more : more.filter((w) => w.category === key)
              return (
                <TabsContent key={key} value={key}>
                  {/* 모바일은 옆으로 넘겨 보는 카드 행, 태블릿부터 그리드 */}
                  <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
                    {list.map((work) => (
                      <li key={work.slug} className="w-[82%] shrink-0 snap-start md:w-auto">
                        <MoreCard work={work} />
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              )
            })}
          </Tabs>
        </Reveal>
      </div>
    </section>
  )
}
