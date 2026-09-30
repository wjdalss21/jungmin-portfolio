import Reveal from '../../components/Reveal'
import RollingNumber from '../../components/RollingNumber'
import { useLang } from '../../i18n/useLang'

export default function AboutSection() {
  const { profile } = useLang()

  return (
    <section id="about" className="section border-t border-line/10">
      <div className="container-page grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="mb-4 text-sm font-medium text-accent-ink">
            {profile.school}, {profile.role}
          </p>
          <h2 className="section-title">
            {profile.aboutTitle.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg">
            {profile.aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <dl className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-8">
            {profile.metrics.map((m, i) => (
              <div key={m.label} className="lg:flex lg:items-baseline lg:gap-5">
                <dd className="font-display text-6xl font-semibold tabular-nums text-accent md:text-7xl">
                  <RollingNumber value={m.value} delay={0.2 + i * 0.15} />
                </dd>
                <dt className="mt-2 text-sm text-muted lg:mt-0">{m.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
