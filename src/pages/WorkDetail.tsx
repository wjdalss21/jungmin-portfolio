import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  Article,
  CalendarBlank,
  CaretRight,
  ChartLineUp,
  ChartPieSlice,
  ChatCircleText,
  CheckCircle,
  FlowArrow,
  GithubLogo,
  Info,
  Lightbulb,
  Monitor,
  Path,
  PresentationChart,
  Question,
  RocketLaunch,
  Stack,
  Trophy,
  UserFocus,
  UsersThree,
  WarningCircle,
  Wrench,
  type Icon,
} from '@phosphor-icons/react'
import Reveal from '@/components/Reveal'
import WorkCover from '@/components/WorkCover'
import TermText from '@/components/TermText'
import { Badge } from '@/components/ui/badge'
import { workPath } from '@/data/content'
import { useLang } from '@/i18n/useLang'
import type { Contribution } from '@/types'
import NotFound from './NotFound'

function Block({ title, icon: IconCmp, children }: { title: string; icon: Icon; children: ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t border-line/10 py-12 md:grid-cols-12 md:gap-8">
      <h2 className="flex items-center gap-3 self-start text-lg font-bold tracking-tight text-ink md:col-span-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint/25 text-accent-ink">
          <IconCmp size={20} weight="duotone" aria-hidden="true" />
        </span>
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </Reveal>
  )
}

function ContributionChart({ items, emptyText }: { items: Contribution[] | null; emptyText: string }) {
  if (!items || items.length === 0) {
    return <p className="rounded-card border border-dashed border-line/25 px-6 py-8 text-muted">{emptyText}</p>
  }
  return (
    <ul className="space-y-4">
      {items.map((c) => (
        <li key={c.area} className="grid grid-cols-[8rem_1fr_3rem] items-center gap-4">
          <span className="text-sm">{c.area}</span>
          <span className="h-2 rounded-full bg-accent" style={{ width: `${c.percent}%` }} />
          <span className="text-right text-sm font-semibold tabular-nums text-ink">{c.percent}%</span>
        </li>
      ))}
    </ul>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const { works, t } = useLang()
  const detailWorks = works.filter((w) => w.detail)
  const work = works.find((w) => w.slug === slug)
  if (!work || !work.detail) return <NotFound />

  const d = work.detail
  const index = detailWorks.findIndex((w) => w.slug === work.slug)
  const prev = detailWorks[index - 1]
  const next = detailWorks[index + 1]
  const backHash = work.kind === 'project' ? '/#projects' : '/#research'

  const meta: { label: string; value: string; icon: Icon }[] = [
    { label: t.detail.meta.period, value: work.period, icon: CalendarBlank },
    { label: t.detail.meta.team, value: work.team, icon: UsersThree },
    { label: t.detail.meta.role, value: work.role, icon: UserFocus },
    ...(work.venue ? [{ label: t.detail.meta.venue, value: work.venue, icon: PresentationChart }] : []),
    ...(work.award ? [{ label: t.detail.meta.award, value: work.award, icon: Trophy }] : []),
  ]

  // 이미지가 적으면 넓은 캡처가 잘리지 않도록 원본 비율로 세로 배치
  const stacked = (d.gallery?.length ?? 0) < 4

  return (
    <article className="container-page pb-24 pt-10 md:pt-16">
      <Link to={backHash} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} aria-hidden="true" />
        {t.detail.back}
      </Link>

      <header className="mt-10">
        <p className="text-sm font-medium text-accent-ink">{t.detail.kind[work.kind]}</p>
        <h1 className="mt-3 max-w-[22ch] text-4xl font-bold leading-[1.2] tracking-tight text-ink md:text-5xl">
          {work.title}
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed">{work.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <Badge key={tag}>
              <TermText text={tag} />
            </Badge>
          ))}
        </div>

        {(work.liveUrl || work.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {work.liveUrl && (
              <a href={work.liveUrl} target="_blank" rel="noreferrer" className="btn-primary group !py-2 !pr-2">
                {t.detail.live}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-navy/15 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-0.5">
                  <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                </span>
              </a>
            )}
            {work.repoUrl && (
              <a href={work.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <GithubLogo size={16} weight="bold" aria-hidden="true" />
                {t.detail.repo}
              </a>
            )}
          </div>
        )}

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 rounded-card bg-surface p-6 md:grid-cols-5 md:p-8">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="flex items-center gap-1.5 text-sm text-muted">
                <m.icon size={16} weight="duotone" className="text-accent-ink" aria-hidden="true" />
                {m.label}
              </dt>
              <dd className="mt-1.5 font-semibold leading-snug text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <WorkCover work={work} size="lg" className="mt-12 aspect-[16/9] w-full" />

      <div className="mt-8">
        <Block title={t.detail.overview} icon={Info}>
          <div className="space-y-4 text-base leading-relaxed md:text-lg">
            {d.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>

        <Block title={t.detail.problem} icon={Question}>
          <ul className="space-y-3">
            {d.problem.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed">
                <Question size={18} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Block>

        <Block title={d.approachTitle ?? t.detail.approach} icon={Path}>
          <ol className="grid gap-6 sm:grid-cols-2">
            {d.approach.map((a, i) => (
              <li key={a.title} className="rounded-card bg-surface p-6 ring-1 ring-inset ring-line/10">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-on-navy">
                  {i + 1}
                </span>
                <p className="mt-4 font-bold text-ink">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed">{a.body}</p>
              </li>
            ))}
          </ol>
        </Block>

        {d.flow && (
          <Block title={t.detail.flow} icon={FlowArrow}>
            <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
              {d.flow.map((f, i) => {
                const last = i === d.flow!.length - 1
                return (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full py-2 pl-2 pr-4 text-sm font-semibold ${
                        last ? 'bg-[#118AB2] text-[#F2F2ED]' : 'bg-mint/25 text-ink'
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full font-display text-xs ${
                          last ? 'bg-[#F2F2ED]/20' : 'bg-bg text-accent-ink'
                        }`}
                      >
                        {i + 1}
                      </span>
                      {f}
                    </span>
                    {!last && <CaretRight size={14} className="rotate-90 text-muted md:rotate-0" aria-hidden="true" />}
                  </li>
                )
              })}
            </ol>
          </Block>
        )}

        {d.stack && (
          <Block title={t.detail.stack} icon={Stack}>
            {d.tools && (
              <div className="mb-8 flex flex-wrap gap-2">
                {d.tools.map((tool) => (
                  <Badge key={tool} variant="outline">
                    <TermText text={tool} />
                  </Badge>
                ))}
              </div>
            )}
            <ul className="divide-y divide-line/10">
              {d.stack.map((s) => (
                <li key={s.name} className="grid gap-2 py-5 first:pt-0 md:grid-cols-3 md:gap-6">
                  <TermText text={s.name} className="font-semibold text-accent-ink" />
                  <p className="text-sm leading-relaxed">
                    <span className="text-muted">{t.detail.reason} </span>
                    {s.reason}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <span className="text-muted">{t.detail.usage} </span>
                    {s.usage}
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {d.gallery && (
          <Block title={t.detail.gallery} icon={Monitor}>
            <div className={stacked ? 'grid gap-10' : 'grid gap-6 sm:grid-cols-2'}>
              {d.gallery.map((g) => (
                <figure key={g.src}>
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    width={1600}
                    height={stacked ? 1000 : 1200}
                    className={
                      stacked
                        ? 'h-auto w-full rounded-card bg-surface p-4 ring-1 ring-line/10'
                        : 'aspect-[4/3] w-full rounded-card bg-surface object-cover object-top ring-1 ring-line/10'
                    }
                  />
                  <figcaption className="mt-3 text-sm text-muted">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Block>
        )}

        {d.troubleshooting && (
          <Block title={t.detail.troubleshooting} icon={Wrench}>
            <div className="space-y-6">
              {d.troubleshooting.map((ts) => (
                <section key={ts.title} className="rounded-card bg-surface p-6 ring-1 ring-inset ring-line/10 md:p-8">
                  <h3 className="font-bold leading-snug text-ink">{ts.title}</h3>
                  <ol className="mt-5 grid gap-4 md:grid-cols-3">
                    {(
                      [
                        { key: 'problem', icon: WarningCircle, text: ts.problem, tone: 'text-muted' },
                        { key: 'approach', icon: Lightbulb, text: ts.approach, tone: 'text-accent-ink' },
                        { key: 'result', icon: CheckCircle, text: ts.result, tone: 'text-accent' },
                      ] as const
                    ).map((step) => (
                      <li key={step.key} className="rounded-xl bg-bg p-4">
                        <p className={`flex items-center gap-1.5 text-sm font-semibold ${step.tone}`}>
                          <step.icon size={16} weight="duotone" aria-hidden="true" />
                          {t.detail.tsSteps[step.key]}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </Block>
        )}

        {d.publications && (
          <Block title={t.detail.publications} icon={Article}>
            <ul className="space-y-6">
              {d.publications.map((p) => (
                <li key={p.title}>
                  <p className="font-semibold leading-snug text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.authors}</p>
                  <p className="text-sm text-muted">
                    {p.venue}, <span className="tabular-nums">{p.date}</span>
                  </p>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent-ink hover:underline"
                    >
                      {t.detail.viewOriginal}
                      <ArrowSquareOut size={14} aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title={t.detail.results} icon={ChartLineUp}>
          <ul className="space-y-3">
            {d.results.map((r) => (
              <li key={r} className="flex gap-3 text-lg font-semibold leading-snug text-ink">
                <Trophy size={20} weight="duotone" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </Block>

        {d.nextSteps && (
          <Block title={t.detail.nextSteps} icon={RocketLaunch}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {d.nextSteps.map((n) => (
                <li key={n.title} className="rounded-card border border-dashed border-line/25 p-6">
                  <p className="font-bold text-ink">{n.title}</p>
                  <p className="mt-2 text-sm leading-relaxed">{n.body}</p>
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title={t.detail.contribution} icon={ChartPieSlice}>
          <ContributionChart items={work.contribution} emptyText={t.detail.contributionEmpty} />
        </Block>

        <Block title={t.detail.retrospective} icon={ChatCircleText}>
          <div className="space-y-4 text-base leading-relaxed md:text-lg">
            {d.retrospective.map((r) => (
              <p key={r}>{r}</p>
            ))}
          </div>
        </Block>
      </div>

      <nav className="mt-8 grid gap-4 border-t border-line/10 pt-10 sm:grid-cols-2" aria-label={t.detail.otherAria}>
        {prev ? (
          <Link to={workPath(prev)} className="group -m-4 rounded-card p-4 hover:bg-surface">
            <span className="flex items-center gap-2 text-sm text-muted">
              <ArrowLeft size={14} aria-hidden="true" /> {t.detail.prev}
            </span>
            <span className="mt-2 block font-semibold text-ink">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={workPath(next)} className="group -m-4 rounded-card p-4 text-right hover:bg-surface">
            <span className="flex items-center justify-end gap-2 text-sm text-muted">
              {t.detail.next} <ArrowRight size={14} aria-hidden="true" />
            </span>
            <span className="mt-2 block font-semibold text-ink">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  )
}
