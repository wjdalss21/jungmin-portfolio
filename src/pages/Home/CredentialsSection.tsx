import { Briefcase, Certificate, Trophy, type Icon } from '@phosphor-icons/react'
import Reveal from '@/components/Reveal'
import { useLang } from '@/i18n/useLang'
import type { Credential } from '@/types'

function CredentialList({ title, items, icon: IconCmp }: { title: string; items: Credential[]; icon: Icon }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold text-muted">
        <IconCmp size={18} weight="duotone" className="text-accent-ink" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-5 space-y-5">
        {items.map((item) => (
          <li key={item.title}>
            <p className="font-semibold leading-snug text-ink">{item.title}</p>
            <p className="mt-1 text-sm text-muted">
              {item.issuer}, <span className="tabular-nums">{item.date}</span>
              {item.note && <span className="block">{item.note}</span>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CredentialsSection() {
  const { profile, t } = useLang()

  return (
    <section id="credentials" className="section border-t border-line/10">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title">{t.credentials.title}</h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-14 grid gap-12 md:grid-cols-3">
          <CredentialList title={t.credentials.awards} items={profile.awards} icon={Trophy} />
          <CredentialList title={t.credentials.certificates} items={profile.certificates} icon={Certificate} />
          <CredentialList title={t.credentials.activities} items={profile.activities} icon={Briefcase} />
        </Reveal>
      </div>
    </section>
  )
}
