import { Link } from 'react-router-dom'
import { ArrowSquareOut, ArrowUpRight } from '@phosphor-icons/react'
import Reveal from '../../components/Reveal'
import { useLang } from '../../i18n/useLang'
import type { PublicationEntry } from '../../types'

function PublicationRow({ pub }: { pub: PublicationEntry }) {
  const { t } = useLang()
  const title = (
    <p className="font-semibold leading-snug text-ink transition-colors group-hover:text-accent-ink">{pub.title}</p>
  )

  return (
    <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <div className="min-w-0">
        {pub.href ? (
          <Link to={pub.href} className="group inline-flex items-start gap-2">
            {title}
            <ArrowUpRight size={16} className="mt-1 shrink-0 text-muted group-hover:text-ink" aria-hidden="true" />
          </Link>
        ) : (
          title
        )}
        <p className="mt-1 text-sm text-muted">
          {pub.venue}, <span className="tabular-nums">{pub.date}</span>
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {pub.note && <span className="tag">{pub.note}</span>}
        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noreferrer"
            className="-my-3 inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-accent-ink hover:underline"
          >
            {t.research.original}
            <ArrowSquareOut size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function ResearchSection() {
  const { profile, t } = useLang()
  const years = [...new Set(profile.publications.map((p) => p.year))]

  return (
    <section id="research" className="section bg-surface">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title">{t.research.title}</h2>
<p className="mt-4 max-w-[60ch] text-lg">{t.research.intro}</p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {years.map((year) => (
            <Reveal key={year} className="grid gap-4 md:grid-cols-12">
              <p className="font-display text-4xl font-semibold tabular-nums text-accent md:col-span-2">{year}</p>
              <div className="divide-y divide-line/10 md:col-span-10">
                {profile.publications.filter((p) => p.year === year).map((pub) => (
                  <PublicationRow key={pub.title} pub={pub} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
