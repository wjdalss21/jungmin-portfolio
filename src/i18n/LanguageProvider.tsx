import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { UI } from './ui'

const STORAGE_KEY = 'portfolio-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const isLang = (v: string | null): v is Lang => v === 'ko' || v === 'en'

// 우선순위: ?lang= 쿼리 > 저장된 선택 > 브라우저 언어
function detectLang(): Lang {
  const query = new URLSearchParams(window.location.search).get('lang')
  if (isLang(query)) return query
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // 저장소 접근 불가 시 무시
  }
  return navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = UI[lang].siteTitle
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    // 직접 전환하면 ?lang= 쿼리를 지워 새로고침 시 저장된 선택을 따르게 함
    const url = new URL(window.location.href)
    if (url.searchParams.has('lang')) {
      url.searchParams.delete('lang')
      window.history.replaceState(window.history.state, '', url)
    }
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // 저장소 접근 불가 시 무시
    }
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
