import type { ProfileContent } from '../../types'

export const PROFILE_KO: ProfileContent = {
  name: '박정민',
  role: 'AX & PM 지원자',
  school: '경기대학교 경영정보학과',
  headline: ['기획으로 AI 콘텐츠의', '한계를 넓힙니다'],
  intro: '생성형 AI로 콘텐츠를 만드는 도구를 기획하고, 사람들에게 어떻게 가닿는지까지 직접 확인합니다.',
  email: 'jungxmin21@gmail.com',
  github: 'https://github.com/wjdalss21',
  githubLabel: 'github.com/wjdalss21',
  whyQuestions: [
    { question: '왜 팔로워 수만 보고 인플루언서를 고를까?', project: 'IN-Fit', href: '/projects/infit' },
    { question: '왜 모든 관람객이 같은 설명을 들어야 할까?', project: '도슨트 AI', href: '/projects/docent' },
    { question: '왜 조회수가 팔로우로 이어지지 않을까?', project: 'SNS 실험', href: '/projects/sns-experiment' },
  ],
  highlights: [
    { label: '현재', value: '스텔라앤 AI 콘텐츠 기획 인턴' },
    { label: '수상', value: 'IN-Fit 학술대회 대상' },
    { label: '자격', value: 'SQLD, ADSP' },
  ],
  aboutTitle: ['“왜 만들어야 하는가”부터', '정하는 기획자'],
  aboutParagraphs: [
    'AI 휴먼 프로젝트에서 헤이젠으로 첫 영상을 만든 순간부터, 생성형 AI가 콘텐츠 제작 방식을 바꿀 수 있다고 확신했습니다.',
    '이후 스텔라앤에서 웹소설을 AI 비디오로 각색하는 플랫폼의 기능 개발에 참여하며 서비스 기획, 데이터 분석, 콘텐츠 실험을 오갔습니다. 그 과정에서 “왜 이걸 만들어야 하는가”부터 정하는 법을 훈련해왔습니다.',
  ],
  metrics: [
    { value: '4', label: '기획 참여 프로젝트' },
    { value: '1', label: '학회 대상 수상' },
    { value: '1', label: '학술지 논문 (주저자)' },
  ],
  contactTitle: '만드는 사람과 보는 사람 사이의 간극을 직접 확인하며 기획합니다.',
  contactBody: '웹소설이든 숏폼이든, 함께 이야기 나눌 기회를 기다리고 있습니다.',
  publications: [
    {
      year: '2026',
      title: 'BERTopic 모델링 기반 도슨트 사용자 경험의 주요 속성 도출 및 UX 개선방안',
      venue: '한국IT서비스학회지',
      date: '2026.08',
      note: '주저자',
      href: '/projects/docent',
    },
    {
      year: '2026',
      title: 'IN-Fit: 멀티모달 AI 에이전트 기반 브랜드-인플루언서 적합도 분석 플랫폼',
      venue: '한국디지털산업학회 & 한국스마트미디어학회',
      date: '2026.04',
      note: '대상',
      href: '/projects/infit',
    },
    {
      year: '2025',
      title: '맞춤형 도슨트 생성 AI: LangChain과 RAG 활용 연구',
      venue: '한국IT서비스학회 추계학술대회',
      date: '2025.11',
      href: '/projects/docent',
    },
    {
      year: '2025',
      title: '개인형 이동장치(PM) 사고 유형별 심각도에 영향을 미치는 연관 요인 분석',
      venue: '한국지식경영학회 지식경영연구',
      date: '2025.09',
      note: 'KCI 게재',
      href: '/research/pm-accident',
      url: 'https://doi.org/10.15813/kmr.2025.26.3.013',
    },
    {
      year: '2025',
      title: 'AI 휴먼 기반 학습 모델 및 교육전략 연구',
      venue: '동국대학교, 경기대학교 공동 연구 (AI 휴먼 강의영상 제작, 보고서 작성)',
      date: '2025.05 - 2025.12',
    },
    {
      year: '2025',
      title: '개인형 이동장치(PM) 사고의 다차원적 특성 및 발생 요인 분석',
      venue: '한국IT서비스학회 춘계학술대회',
      date: '2025.05',
      href: '/research/pm-accident',
    },
  ],

  skillGroups: [
    {
      name: '생성형 AI 콘텐츠',
      items: [
        {
          name: 'Seedance 2.5, Higgsfield',
          reason: '적은 인원으로 여러 영상 형식을 빠르게 실험하기 위해',
          usage: 'AI 콘텐츠 SNS 실험, MITHRIL',
        },
        {
          name: 'Gemini',
          reason: '기획 초안과 리서치 정리를 빠르게 반복하기 위해',
          usage: '트렌드 리서치, 콘텐츠 기획',
        },
      ],
    },
    {
      name: 'AI 서비스 설계',
      items: [
        {
          name: 'LangChain, RAG',
          reason: '정확성이 필요한 도메인에서 근거 기반 생성 구조가 필요해서',
          usage: '맞춤형 도슨트 AI',
        },
        {
          name: 'LangGraph',
          reason: '여러 에이전트의 실행 흐름과 상태를 하나로 관리하기 위해',
          usage: 'IN-Fit 멀티 에이전트 설계',
        },
      ],
    },
    {
      name: '데이터 분석',
      items: [
        {
          name: 'BERTopic, 감성분석',
          reason: '대량의 서술형 사용자 반응을 일관된 기준으로 구조화하기 위해',
          usage: '도슨트 UX 연구, 멜론, OSMU',
        },
        {
          name: 'CCA, 네트워크 분석',
          reason: '범주형 요인 간 연관 구조를 시각적으로 파악하기 위해',
          usage: 'PM 사고 요인 연구',
        },
      ],
    },
  ],

  awards: [
    { title: 'IN-Fit, 대상', issuer: '한국디지털산업학회 & 한국스마트미디어학회', date: '2026.04' },
    { title: '중·장년 AI 교육 추천 에이전트, 우수상', issuer: '연세대학교 지역사회 경험학습 공모전', date: '2025.12' },
    {
      title: '호텔 추천 AI 챗봇, Service 분야 수상',
      issuer: 'Kensington College of Business Hackathon',
      date: '2025.08',
    },
  ],

  certificates: [
    { title: 'SQLD', issuer: '한국데이터산업진흥원', date: '2026.03' },
    { title: 'OPIc IM1', issuer: 'ACTFL', date: '2025.12', note: '2027.12까지 유효' },
    { title: 'ADSP', issuer: '한국데이터산업진흥원', date: '2025.09' },
  ],

  activities: [
    { title: 'AI 콘텐츠 기획 인턴', issuer: '스텔라앤', date: '2025 - 현재' },
    { title: 'SoDAlab 연구실 홈페이지 제작', issuer: 'SoDAlab', date: '2025' },
    { title: 'SoDAlab 인스타그램 제작 및 운영', issuer: 'SoDAlab', date: '2025' },
  ],
}
