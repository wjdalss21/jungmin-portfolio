import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

interface RollingNumberProps {
  value: string
  delay?: number
}

const EASE = [0.16, 1, 0.3, 1] as const

// 화면에 들어오면 숫자 기둥이 한 바퀴 돌고 목표 값에 멈추는 슬롯형 카운터
export default function RollingNumber({ value, delay = 0 }: RollingNumberProps) {
  const reduce = useReducedMotion()
  // 기둥 전체(대부분 가려짐)가 아니라 실제로 보이는 1칸짜리 창이 화면에 들어왔는지로 판단
  const windowRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(windowRef, { once: true, amount: 0.5 })
  const target = Number(value)

  if (reduce || !/^\d$/.test(value)) return <>{value}</>

  // 0~9 한 바퀴 + 0~목표값
  const digits = [...Array.from({ length: 10 }, (_, i) => i), ...Array.from({ length: target + 1 }, (_, i) => i)]
  const stop = digits.length - 1

  return (
    <span ref={windowRef} className="relative inline-block h-[1em] overflow-hidden align-top leading-none">
      <span className="sr-only">{value}</span>
      {/* 인쇄 시에는 애니메이션 없이 최종 값만 표시 */}
      <span aria-hidden="true" className="hidden print:block">
        {value}
      </span>
      <motion.span
        aria-hidden="true"
        className="flex flex-col print:hidden"
        initial={{ y: 0 }}
        animate={inView ? { y: `-${stop}em` } : { y: 0 }}
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
