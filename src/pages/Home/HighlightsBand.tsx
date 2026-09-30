import { Briefcase, Certificate, Trophy } from '@phosphor-icons/react'
import Reveal from '@/components/Reveal'
import { useLang } from '@/i18n/useLang'

// Hero 바로 아래 핵심 이력 띠 (현재, 수상, 자격 순서)
const TONES = ['bg-[#464B71] text-[#F2F2ED]', 'bg-[#7CD5C7] text-[#262A40]', 'bg-surface text-ink']
const ICONS = [Briefcase, Trophy, Certificate]

export default function HighlightsBand() {
  const { profile, t } = useLang()

  return (
    <section className="container-page pb-8" aria-label={t.highlightsAria}>
      <Reveal>
        <dl className="grid gap-px overflow-hidden rounded-card md:grid-cols-3">
          {profile.highlights.map((item, i) => {
            const Icon = ICONS[i] ?? Briefcase
            return (
              <div key={item.label} className={`flex items-start gap-4 px-6 py-6 md:px-8 ${TONES[i]}`}>
                <Icon size={28} weight="duotone" className="mt-0.5 shrink-0 opacity-80" aria-hidden="true" />
                <div>
                  <dt className="text-sm opacity-75">{item.label}</dt>
                  <dd className="mt-1 text-lg font-semibold tracking-tight md:text-xl">{item.value}</dd>
                </div>
              </div>
            )
          })}
        </dl>
      </Reveal>
    </section>
  )
}
