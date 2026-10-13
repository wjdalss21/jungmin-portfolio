import { useEffect } from 'react'
import WorkDetailBody from '@/components/WorkDetailBody'
import { useLang } from '@/i18n/useLang'
import HeroSection from './Home/HeroSection'
import HighlightsBand from './Home/HighlightsBand'
import AboutSection from './Home/AboutSection'
import ProjectsSection from './Home/ProjectsSection'
import ResearchSection from './Home/ResearchSection'
import SkillsSection from './Home/SkillsSection'
import CredentialsSection from './Home/CredentialsSection'
import ContactSection from './Home/ContactSection'

// PDF 저장용 한 장짜리 문서: 홈 전체 + 모든 상세 페이지 + 연락처
// 메뉴에서는 연결하지 않고 /print?lang=ko 로만 접근
export default function PrintPage() {
  const { works } = useLang()
  const detailWorks = works.filter((w) => w.detail)

  // 인쇄 전에 아래쪽 이미지까지 모두 불러오도록 지연 로딩 해제
  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      img.loading = 'eager'
    })
  }, [])

  return (
    <div className="print-doc">
      <HeroSection />
      <HighlightsBand />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <CredentialsSection />
      {detailWorks.map((work) => (
        <article key={work.slug} className="container-page break-before-page pt-6">
          <WorkDetailBody work={work} />
        </article>
      ))}
      <div className="break-before-page">
        <ContactSection />
      </div>
    </div>
  )
}
