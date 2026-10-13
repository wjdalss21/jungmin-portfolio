import { useEffect, useRef } from 'react'
import {
  motion,
  useAnimate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'

const LETTERS = ['W', 'h', 'y']
const EASE = [0.16, 1, 0.3, 1] as const
const BLINK_EASE = [0.32, 0.72, 0, 1] as const
const EYE_TRAVEL_PX = 6
const BLINK_MIN_MS = 2200
const BLINK_MAX_MS = 5200

interface WhyFaceProps {
  // 값이 바뀔 때마다 놀란 표정 반응
  reactKey: number
  scrollProgress: MotionValue<number>
}

// "Why?" 워드마크. W 위의 두 눈이 깜빡이고 커서를 따라봄
export default function WhyFace({ reactKey, scrollProgress }: WhyFaceProps) {
  const reduce = useReducedMotion()
  const [scope, animate] = useAnimate<HTMLParagraphElement>()
  const eyesRef = useRef<HTMLSpanElement>(null)
  const firstReact = useRef(true)

  const lookX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 })
  const lookY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 })

  // 스크롤하면 워드마크가 위로 밀리며 옅어짐
  const y = useTransform(scrollProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollProgress, [0, 0.8], [1, 0.15])

  // 커서 방향으로 눈동자 이동
  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      const el = eyesRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const dist = Math.hypot(dx, dy) || 1
      const pull = Math.min(dist / 300, 1)
      lookX.set((dx / dist) * EYE_TRAVEL_PX * pull)
      lookY.set((dy / dist) * EYE_TRAVEL_PX * pull)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, lookX, lookY])

  // 불규칙한 간격으로 깜빡임, 가끔 두 번 연속
  useEffect(() => {
    if (reduce) return
    let timer: number
    const schedule = () => {
      const wait = BLINK_MIN_MS + Math.random() * (BLINK_MAX_MS - BLINK_MIN_MS)
      timer = window.setTimeout(async () => {
        const blink = { scaleY: [1, 0.08, 1] }
        await animate('.why-eye', blink, { duration: 0.2, ease: BLINK_EASE })
        if (Math.random() < 0.25) await animate('.why-eye', blink, { duration: 0.18, ease: BLINK_EASE })
        schedule()
      }, wait)
    }
    // 첫 깜빡임은 눈을 뜬 뒤에 시작
    const start = window.setTimeout(schedule, 1400)
    return () => {
      window.clearTimeout(start)
      window.clearTimeout(timer)
    }
  }, [reduce, animate])

  // 질문이 바뀌면 눈이 커지고 물음표가 갸웃
  useEffect(() => {
    if (reduce) return
    if (firstReact.current) {
      firstReact.current = false
      return
    }
    animate('.why-eye', { scale: [1, 1.4, 1] }, { duration: 0.45, ease: EASE })
    animate('.why-mark', { rotate: [0, 14, -6, 0] }, { duration: 0.7, ease: BLINK_EASE })
  }, [reactKey, reduce, animate])

  return (
    <motion.p
      ref={scope}
      aria-hidden="true"
      style={reduce ? undefined : { y, opacity }}
      className="font-display text-[5.75rem] font-semibold leading-[0.9] tracking-[-0.03em] text-ink sm:text-[9rem] lg:text-[11.5rem]"
    >
      {LETTERS.map((letter, i) => (
        <span key={letter} className="relative inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] pt-[0.3em] -mt-[0.3em]">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: EASE }}
          >
            {letter}
          </motion.span>

          {i === 0 && (
            <motion.span
              ref={eyesRef}
              className="pointer-events-none absolute left-[27%] right-[27%] top-[0.2em] flex justify-between"
              style={reduce ? undefined : { x: lookX, y: lookY }}
            >
              {[0, 1].map((eye) => (
                <motion.span
                  key={eye}
                  className="why-eye block h-[0.13em] w-[0.1em] rounded-full bg-current"
                  initial={reduce ? false : { scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.9, ease: EASE }}
                />
              ))}
            </motion.span>
          )}
        </span>
      ))}
      <motion.span
        className="why-mark inline-block origin-bottom text-accent"
        initial={reduce ? false : { y: '-70%', rotate: -30, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.45 }}
      >
        ?
      </motion.span>
    </motion.p>
  )
}
