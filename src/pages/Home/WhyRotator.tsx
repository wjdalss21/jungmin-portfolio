import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { useLang } from '../../i18n/useLang'

const INTERVAL_MS = 4000
const EASE = [0.16, 1, 0.3, 1] as const

interface WhyRotatorProps {
  index: number
  onIndexChange: (index: number) => void
}

// 프로젝트의 출발 질문을 단어 단위로 순환 노출. 호버·포커스 중에는 멈춤
export default function WhyRotator({ index, onIndexChange }: WhyRotatorProps) {
  const { profile, t } = useLang()
  const questions = profile.whyQuestions
  const reduce = useReducedMotion()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const id = window.setTimeout(() => onIndexChange((index + 1) % questions.length), INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [reduce, paused, index, questions.length, onIndexChange])

  if (reduce) {
    return (
      <ul className="space-y-3">
        {questions.map((q) => (
          <li key={q.href}>
            <Link to={q.href} className="text-lg font-semibold text-ink hover:text-accent-ink">
              {q.question}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  const current = questions[index % questions.length]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-[6rem] md:min-h-[5rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={current.question} exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}>
            <Link to={current.href} className="group block cursor-pointer">
              <p className="text-xl font-semibold leading-snug text-ink md:text-2xl">
                {current.question.split(' ').map((word, i) => (
                  <Fragment key={`${word}-${i}`}>
                    {i > 0 && ' '}
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                    >
                      {word}
                    </motion.span>
                  </Fragment>
                ))}
              </p>
              <motion.p
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {t.hero.answer(current.project)}
                <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </motion.p>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-1" role="group" aria-label={t.hero.pickerAria}>
        {questions.map((q, i) => (
          <button
            key={q.href}
            type="button"
            aria-pressed={i === index}
            aria-label={t.hero.pickAria(i + 1)}
            onClick={() => onIndexChange(i)}
            className="group flex h-8 cursor-pointer items-center px-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === index ? 'w-8 bg-accent' : 'w-3 bg-line/20 group-hover:bg-line/40'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
