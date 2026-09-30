import { motion, useReducedMotion } from 'motion/react'

interface RollingNumberProps {
  value: string
  delay?: number
}

const EASE = [0.16, 1, 0.3, 1] as const

// 화면에 들어오면 숫자 기둥이 한 바퀴 돌고 목표 값에 멈추는 슬롯형 카운터
export default function RollingNumber({ value, delay = 0 }: RollingNumberProps) {
  const reduce = useReducedMotion()
  const target = Number(value)

  if (reduce || !/^\d$/.test(value)) return <>{value}</>

  // 0~9 한 바퀴 + 0~목표값
  const digits = [...Array.from({ length: 10 }, (_, i) => i), ...Array.from({ length: target + 1 }, (_, i) => i)]
  const stop = digits.length - 1

  return (
    <span className="relative inline-block h-[1em] overflow-hidden align-top leading-none">
      <span className="sr-only">{value}</span>
      <motion.span
        aria-hidden="true"
        className="flex flex-col"
        initial={{ y: 0 }}
        whileInView={{ y: `-${stop}em` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, delay, ease: EASE }}
      >
        {digits.map((d, i) => (
          <span key={i} className="block h-[1em]">
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}
