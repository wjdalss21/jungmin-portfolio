import { Fragment } from 'react'
import { GLOSSARY } from '@/data/glossary'
import { useLang } from '@/i18n/useLang'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

// 쉼표로 나열된 문자열에서 용어집에 있는 단어만 툴팁으로 감싼다.
// 링크 안에서는 버튼을 중첩할 수 없으므로 링크 밖에서만 사용
export default function TermText({ text, className }: { text: string; className?: string }) {
  const { lang } = useLang()
  const glossary = GLOSSARY[lang]
  const lookup = (word: string) =>
    glossary[word] ?? Object.entries(glossary).find(([k]) => k.toLowerCase() === word.toLowerCase())?.[1]

  return (
    <span className={className}>
      {text.split(', ').map((part, i) => {
        const definition = lookup(part)
        return (
          <Fragment key={`${part}-${i}`}>
            {i > 0 && ', '}
            {definition ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="cursor-help underline decoration-accent/50 decoration-dotted underline-offset-4 hover:decoration-accent"
                  >
                    {part}
                  </button>
                </TooltipTrigger>
                <TooltipContent>{definition}</TooltipContent>
              </Tooltip>
            ) : (
              part
            )}
          </Fragment>
        )
      })}
    </span>
  )
}
