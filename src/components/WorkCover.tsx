import type { CoverTone, Work } from '../types'

// 커버 색은 테마와 무관하게 고정 (포인트 컬러 4종)
const TONE_CLASS: Record<CoverTone, string> = {
  navy: 'bg-[#464B71] text-[#F2F2ED]',
  accent: 'bg-[#118AB2] text-[#F2F2ED]',
  mint: 'bg-[#7CD5C7] text-[#262A40]',
  paper: 'bg-surface text-ink ring-1 ring-inset ring-line/10',
}

interface WorkCoverProps {
  work: Work
  className?: string
  size?: 'lg' | 'md'
}

export default function WorkCover({ work, className = '', size = 'md' }: WorkCoverProps) {
  const { cover } = work

  if (cover.image) {
    return (
      <div className={`overflow-hidden rounded-card ${TONE_CLASS[cover.tone]} ${className}`}>
        <img
          src={cover.image}
          alt={cover.imageAlt ?? work.title}
          loading="lazy"
          width={1600}
          height={1000}
          style={{ objectPosition: cover.imagePosition ?? 'top' }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex items-end overflow-hidden rounded-card p-6 md:p-8 ${TONE_CLASS[cover.tone]} ${className}`}
      aria-hidden="true"
    >
      <ul
        className={`space-y-1 font-bold leading-[1.15] tracking-tight transition-transform duration-700 group-hover:-translate-y-1 ${
          size === 'lg' ? 'text-3xl lg:text-4xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {work.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
