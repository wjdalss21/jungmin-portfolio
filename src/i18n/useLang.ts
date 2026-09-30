import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'
import { CONTENT } from '../data/content'
import { UI } from './ui'

// 현재 언어와 해당 언어의 콘텐츠·UI 문구를 함께 반환
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  const { lang, setLang } = ctx
  return { lang, setLang, t: UI[lang], ...CONTENT[lang] }
}
