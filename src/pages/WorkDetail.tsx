import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import WorkDetailBody from '@/components/WorkDetailBody'
import { workPath } from '@/data/content'
import { useLang } from '@/i18n/useLang'
import NotFound from './NotFound'

export default function WorkDetail() {
  const { slug } = useParams()
  const { works, t } = useLang()
  const detailWorks = works.filter((w) => w.detail)
  const work = works.find((w) => w.slug === slug)
  if (!work || !work.detail) return <NotFound />

  const index = detailWorks.findIndex((w) => w.slug === work.slug)
  const prev = detailWorks[index - 1]
  const next = detailWorks[index + 1]
  const backHash = work.kind === 'project' ? '/#projects' : '/#research'

  return (
    <article className="container-page pb-24 pt-10 md:pt-16">
      <Link to={backHash} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} aria-hidden="true" />
        {t.detail.back}
      </Link>

      <WorkDetailBody work={work} />

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
