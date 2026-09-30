import type { Work } from '../../types'
import { img } from '../assets'

// 프론트엔드 구현 프로젝트 (포트폴리오 PDF 기준)
export const TALKY_OWL_KO: Work = {
  slug: 'talky-owl',
  kind: 'project',
  title: '말해부엉',
  summary: 'AI가 갈등 상황을 듣고 판결과 사과 방법을 제안하는 갈등 중재 서비스. 홈, 사건 기록, AI 판결 결과 화면을 맡아 구현했습니다.',
  period: '2026.06.03 - 2026.06.30',
  team: '팀 프로젝트',
  role: '프론트엔드 개발',
  venue: 'AI 바이브 코딩 프론트엔드 실무과정 X 메인비즈협회',
  tags: ['Next.js', 'TanStack Query', 'Gemini API'],
  cover: { tone: 'mint', image: img('talkyowl-cover.webp'), imageAlt: '말해부엉 서비스 소개 화면', imagePosition: 'center' },
  featured: true,
  contribution: null,
  liveUrl: 'https://talky-owl-iota.vercel.app',
  repoUrl: 'https://github.com/wjdalss21/TALKY-OWL',
  detail: {
    overview: [
      '연인, 친구, 동료, 가족과의 갈등 상황을 입력하면 AI가 판결 결과와 함께 “이렇게 사과해보면 어떨까요?” 같은 해결 방법을 제안하는 서비스입니다.',
      '팀 프로젝트에서 홈, 사건 기록, AI 판결 결과 페이지의 프론트엔드를 맡았습니다.',
    ],
    problem: [
      '가까운 사이의 갈등일수록 감정이 앞서 누구의 잘못인지 객관적으로 정리하기 어렵습니다.',
      '판결 결과와 통계 데이터를 새로고침이나 반복 렌더링에도 안정적으로 보여줘야 했습니다.',
    ],
    approachTitle: '내 역할',
    approach: [
      {
        title: '홈페이지',
        body: '카테고리별 갈등 비율 통계를 시각화하고, 진행 중인 사건 카드와 감정일기 작성 진입 카드를 배치했습니다.',
      },
      {
        title: '사건 기록 페이지',
        body: '카테고리별로 완료된 사건을 필터링하고, 무한 스크롤로 사건 기록을 조회해 상세 페이지로 이어지게 했습니다.',
      },
      {
        title: 'AI 판결 결과 페이지',
        body: '단독과 1:1 모드를 분기해 결과를 보여주고, 1:1일 때는 양측의 잘못을 비교 그래프로 시각화했습니다.',
      },
      {
        title: '갈등 유형 카드',
        body: '판결 탭과 유형 탭을 분리하고, 16종 유형 카드를 제작해 공유하기 기능을 붙였습니다.',
      },
    ],
    tools: [
      'Next.js 15',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'SCSS',
      'Prisma',
      'Supabase',
      'Next.js API Routes',
      'Gemini API',
      'NextAuth(Kakao)',
      'Vercel',
    ],
    stack: [
      {
        name: 'TanStack Query',
        reason: '갈등 ID 기준으로 캐시를 공유해 중복 요청 없이 새로고침 후에도 데이터를 유지하기 위해',
        usage: 'AI 판결 결과, 사건 기록 조회',
      },
      {
        name: 'Next.js API Routes',
        reason: '통계 집계는 서버에서, 화면 표현은 프론트에서 맡도록 책임을 나누기 위해',
        usage: '홈 카테고리별 갈등 비율 통계',
      },
      {
        name: 'Gemini API',
        reason: '갈등 상황 서술을 분석해 판결과 사과 제안을 생성하기 위해',
        usage: 'AI 판결 결과 생성',
      },
    ],
    gallery: [
      { src: img('talkyowl-screens.webp'), caption: '홈페이지, 사건 기록, AI 판결 결과' },
      { src: img('talkyowl-verdict.webp'), caption: '단독 판결, 1:1 판결 비교 그래프, 갈등 유형' },
      { src: img('talkyowl-types.webp'), caption: '16종 갈등 유형 카드 중 일부' },
    ],
    troubleshooting: [
      {
        title: '새로고침하면 판결 결과가 사라지는 데이터 유실',
        problem: 'AI 판결 결과를 상위 컴포넌트에서 fetch한 뒤 props로 내려주는 구조라, 새로고침하면 빈 화면이 노출됐습니다.',
        approach: '각 컴포넌트가 갈등 ID 기준으로 TanStack Query hooks를 직접 호출하는 구조로 바꿨습니다.',
        result: '캐시를 공유해 중복 API 요청 없이 새로고침 후에도 데이터가 정상적으로 보입니다.',
      },
      {
        title: '렌더링 성능을 위한 통계 계산 위치 최적화',
        problem: '카테고리별 퍼센트 계산을 프론트 hooks에서 처리해 렌더링마다 반복 계산과 중복 로직이 생겼습니다.',
        approach: 'API에서 퍼센트를 계산한 뒤 결과값만 내려주는 구조로 변경했습니다.',
        result: '렌더링 부담을 없애고, 데이터 집계는 백엔드, 화면 표현은 프론트로 책임을 명확히 나눴습니다.',
      },
    ],
    results: [
      '홈, 사건 기록, AI 판결 결과 3개 페이지 구현 및 배포',
      'TanStack Query 캐시 공유로 새로고침 시 빈 화면 문제 해결',
      '통계 계산을 API로 옮겨 렌더링 부담 제거',
    ],
    retrospective: [
      '데이터를 어디서 계산하고 어디서 불러올지 정하는 것이 화면의 안정성을 좌우한다는 걸 배웠습니다.',
    ],
  },
}

export const MUSE_KO: Work = {
  slug: 'muse',
  kind: 'project',
  title: 'MUSE, AI 도슨트 플랫폼',
  summary: '원하는 관점과 톤으로 작품 해설을 들을 수 있는 AI 도슨트. 학부 연구에서 기획한 도슨트를 직접 서비스로 구현하고 있습니다.',
  period: '2026.06.20 - 진행 중',
  team: '개인 프로젝트',
  role: '기획, 디자인, 개발',
  tags: ['Next.js', 'Claude API', 'Supabase'],
  cover: { tone: 'mint', image: img('docent-hero.webp'), imageAlt: 'MUSE AI 도슨트 시작 화면', imagePosition: 'center 32%' },
  featured: true,
  contribution: null,
  liveUrl: 'https://muse-nu-lemon.vercel.app/',
  repoUrl: 'https://github.com/wjdalss21/Docent',
  detail: {
    overview: [
      '전시물마다 같은 설명을 읽어주는 기존 도슨트 대신, 관람객이 고른 톤과 이해 수준에 맞춰 해설을 만들어 주는 AI 도슨트 플랫폼입니다.',
      '맞춤형 도슨트 연구에서 기획한 내용을 실제로 쓸 수 있는 서비스로 옮기고 있는 개인 프로젝트입니다.',
    ],
    problem: [
      '관람객마다 관심사와 배경지식이 다른데 해설은 하나뿐입니다.',
      'AI 해설은 요청마다 비용이 발생해, 같은 요청이 반복되면 비용이 불필요하게 늘어납니다.',
    ],
    approachTitle: '주요 기능 (MVP)',
    approach: [
      { title: '작품 목록', body: '작품 카드 리스트와 작품명·작가명 검색, QR 코드 스캔으로 작품에 바로 연결합니다.' },
      {
        title: '톤앤매너 선택',
        body: '정식적, 유머러스, 어린이 맞춤, 철학적 4가지 톤 카드와 이해 수준 슬라이더로 해설 방식을 고릅니다.',
      },
      { title: '작품 상세·해설', body: '작품 배경, 의미·상징, 관계성 탭별로 해설을 스트리밍으로 보여줍니다.' },
      { title: '해설 기반 챗봇', body: '해설 내용을 바탕으로 궁금한 점을 이어서 물어볼 수 있습니다.' },
    ],
    flow: ['QR 스캔', '톤·이해 수준 선택', '캐시 조회', 'Claude 해설 생성', '챗봇 Q&A'],
    tools: [
      'Next.js 15',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'SCSS',
      'Supabase',
      'Next.js API Routes',
      'Claude API',
      'Vercel',
    ],
    stack: [
      {
        name: 'Claude API',
        reason: '선택한 톤과 이해 수준에 맞춘 해설을 생성하기 위해',
        usage: '속성별 해설 스트리밍, 챗봇 Q&A',
      },
      {
        name: 'Supabase',
        reason: '해설을 캐시로 저장해 반복 요청 비용을 없애기 위해',
        usage: 'docent_cache 테이블',
      },
    ],
    gallery: [{ src: img('docent-screens.webp'), caption: '작품 목록, 톤앤매너 선택, 작품 설명, QR 코드 스캔' }],
    troubleshooting: [
      {
        title: '동일 조합 반복 요청 시 불필요한 과금 문제',
        problem: 'Claude API는 요청마다 과금되어, 같은 작품·속성·톤 조합을 반복 요청하면 불필요한 비용이 발생했습니다.',
        approach:
          '(artwork_id, attribute, tone) 복합 유니크 키로 docent_cache 테이블을 설계하고, Route Handler에서 캐시를 먼저 조회해 HIT면 즉시 반환, MISS면 Claude API를 호출한 뒤 저장합니다.',
        result: '작품 수 × 속성 3개 × 톤 4개 조합을 캐싱해, 반복 요청에 API 비용 없이 즉시 응답하는 구조를 만들었습니다.',
      },
    ],
    results: ['MVP 4개 기능 구현 및 배포', '해설 캐싱으로 반복 요청의 API 비용 제거'],
    nextSteps: [
      { title: '오디오 가이드', body: '지금은 텍스트 해설만 제공하지만, Claude가 생성한 해설을 TTS로 변환해 들을 수 있게 합니다.' },
      {
        title: '다국어 지원',
        body: '박물관과 미술관은 외국인 관람객 비중이 높아, 언어 파라미터를 추가해 기존 캐싱 구조 그대로 다국어 해설을 제공합니다.',
      },
    ],
    retrospective: ['AI 기능은 품질만큼 비용 구조를 함께 설계해야 서비스로 지속될 수 있다는 걸 배웠습니다.'],
  },
}
