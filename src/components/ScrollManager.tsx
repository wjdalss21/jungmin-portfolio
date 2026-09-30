import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 라우트 이동 시 해시 위치 또는 페이지 상단으로 스크롤
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
