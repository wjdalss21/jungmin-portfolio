import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { useLang } from '../../i18n/useLang'
import WhyFace from './WhyFace'
import WhyRotator from './WhyRotator'

const EASE = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  const { t, profile, lang } = useLang()
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        }

  return (
    <section
      ref={sectionRef}
      className="container-page grid min-h-[calc(100dvh-10rem)] content-center gap-7 py-8 sm:gap-12 sm:py-16 md:py-20 lg:grid-cols-12 lg:items-end lg:gap-8"
    >
      <div className="lg:col-span-7">
        <WhyFace reactKey={questionIndex} scrollProgress={scrollYProgress} />
        <motion.div {...enter(0.6)} className="mt-5 max-w-xl sm:mt-8">
          <WhyRotator index={questionIndex} onIndexChange={setQuestionIndex} />
        </motion.div>
      </div>

      {/* 언어 전환 시 헤드라인 블록이 다시 들어오도록 key 지정 */}
      <div key={lang} className="lg:col-span-5 lg:pb-3">
        <motion.h1
          {...enter(0.7)}
          className="text-[1.75rem] font-bold leading-[1.3] tracking-tight text-ink sm:text-3xl md:text-4xl"
        >
          {profile.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>
        <motion.p {...enter(0.8)} className="mt-3 max-w-[36ch] text-base leading-relaxed sm:mt-5 sm:text-lg">
          {profile.intro}
        </motion.p>
        <motion.div {...enter(0.9)} className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          <Link to="/#projects" className="btn-primary group !py-2 !pr-2">
            {t.hero.cta}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-navy/15 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </span>
          </Link>
          <Link to="/#contact" className="btn-ghost">
            {t.contact}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
