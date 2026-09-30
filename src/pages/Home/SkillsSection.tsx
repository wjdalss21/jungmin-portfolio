import { ChartBar, Robot, Sparkle } from '@phosphor-icons/react'
import Reveal from '@/components/Reveal'
import TermText from '@/components/TermText'
import { useLang } from '@/i18n/useLang'

// 생성형 AI 콘텐츠, AI 서비스 설계, 데이터 분석 순서
const GROUP_ICONS = [Sparkle, Robot, ChartBar]

export default function SkillsSection() {
  const { profile, t } = useLang()

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="mt-4 max-w-[60ch] text-lg">{t.skills.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {profile.skillGroups.map((group, i) => {
            const Icon = GROUP_ICONS[i] ?? Sparkle
            return (
              <Reveal key={group.name} delay={i * 0.06}>
                <div className="h-full rounded-card border border-line/15 p-6 md:p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/25 text-accent-ink">
                    <Icon size={24} weight="duotone" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{group.name}</h3>
                  <ul className="mt-6 space-y-7">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <TermText text={item.name} className="font-semibold text-accent-ink" />
                        <p className="mt-2 text-sm leading-relaxed">{item.reason}</p>
                        <p className="mt-2 text-sm text-muted">
                          {t.skills.applied}: {item.usage}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
