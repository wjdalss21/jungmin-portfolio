import { EnvelopeSimple, GithubLogo } from '@phosphor-icons/react'
import Reveal from '../../components/Reveal'
import { useLang } from '../../i18n/useLang'

export default function ContactSection() {
  const { profile } = useLang()

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal className="rounded-card bg-[#464B71] px-6 py-16 text-[#F2F2ED] md:px-16 md:py-24">
          <h2 className="max-w-[20ch] text-3xl font-bold leading-[1.25] tracking-tight md:text-5xl">
            {profile.contactTitle}
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg text-[#F2F2ED]/80">
            {profile.contactBody}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn bg-[#7CD5C7] text-[#262A40] hover:-translate-y-0.5"
            >
              <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn border border-[#F2F2ED]/30 text-[#F2F2ED] hover:border-[#F2F2ED]/60"
            >
              <GithubLogo size={18} weight="bold" aria-hidden="true" />
              {profile.githubLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
