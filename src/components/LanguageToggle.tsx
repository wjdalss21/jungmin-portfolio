import { motion } from 'motion/react'
import { useLang } from '../i18n/useLang'
import type { Lang } from '../types'

const OPTIONS: Lang[] = ['ko', 'en']

// KO / EN 세그먼트 토글. 활성 표시가 선택된 쪽으로 미끄러짐
export default function LanguageToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <div role="group" aria-label={t.langToggle} className="flex rounded-full bg-surface p-1 ring-1 ring-inset ring-line/10">
      {OPTIONS.map((option) => {
        const active = option === lang
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(option)}
            className={`relative min-h-[36px] min-w-[44px] cursor-pointer rounded-full px-3 font-display text-xs font-semibold uppercase tracking-wide transition-colors ${
              active ? 'text-on-navy' : 'text-muted hover:text-ink'
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-navy"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{option}</span>
          </button>
        )
      })}
    </div>
  )
}
