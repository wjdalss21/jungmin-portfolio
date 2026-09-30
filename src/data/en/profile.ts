import type { ProfileContent } from '../../types'

export const PROFILE_EN: ProfileContent = {
  name: 'Jungmin Park',
  role: 'AX & PM candidate',
  school: 'Management Information Systems, Kyonggi University',
  headline: ['Planning that pushes', 'AI content further'],
  intro: 'I plan tools that create content with generative AI, then check for myself how it reaches real people.',
  email: 'jungxmin21@gmail.com',
  github: 'https://github.com/wjdalss21',
  githubLabel: 'github.com/wjdalss21',
  whyQuestions: [
    { question: 'Why do brands pick influencers by follower count alone?', project: 'IN-Fit', href: '/projects/infit' },
    { question: 'Why should every visitor hear the same museum guide?', project: 'Docent AI', href: '/projects/docent' },
    { question: 'Why don’t views turn into follows?', project: 'SNS experiment', href: '/projects/sns-experiment' },
  ],
  highlights: [
    { label: 'Now', value: 'AI Content Intern, Stellar&' },
    { label: 'Award', value: 'Grand Prize, IN-Fit' },
    { label: 'Certified', value: 'SQLD, ADsP' },
  ],
  aboutTitle: ['A planner who starts', 'with “why build this?”'],
  aboutParagraphs: [
    'The moment I made my first video with HeyGen on an AI human project, I became convinced that generative AI could change how content is made.',
    'At Stellar&, I joined feature development for a platform that adapts web novels into AI video, moving between service planning, data analysis, and content experiments. Along the way I trained myself to define “why we should build this” before anything else.',
  ],
  metrics: [
    { value: '4', label: 'Projects planned' },
    { value: '1', label: 'Conference grand prize' },
    { value: '1', label: 'Journal paper (first author)' },
  ],
  publications: [
    {
      year: '2026',
      title: 'Deriving Key Attributes of Docent User Experience and UX Improvements Using BERTopic Modeling',
      venue: 'Journal of Information Technology Services',
      date: '2026.08',
      note: 'First author',
      href: '/projects/docent',
    },
    {
      year: '2026',
      title: 'IN-Fit: A Multimodal AI Agent Platform for Brand and Influencer Fit Analysis',
      venue: 'Korea Digital Industry Society & Korea Smart Media Society',
      date: '2026.04',
      note: 'Grand Prize',
      href: '/projects/infit',
    },
    {
      year: '2025',
      title: 'Personalized Docent Generation AI Using LangChain and RAG',
      venue: 'Korea Society of IT Services, Fall Conference',
      date: '2025.11',
      href: '/projects/docent',
    },
    {
      year: '2025',
      title: 'Associated Factors Influencing Accident Severity Across Personal Mobility (PM) Accident Types',
      venue: 'Knowledge Management Research',
      date: '2025.09',
      note: 'KCI journal',
      href: '/research/pm-accident',
      url: 'https://doi.org/10.15813/kmr.2025.26.3.013',
    },
    {
      year: '2025',
      title: 'Learning Models and Teaching Strategies Based on AI Humans',
      venue: 'Dongguk University & Kyonggi University joint research (AI human lecture videos, report)',
      date: '2025.05 - 2025.12',
    },
    {
      year: '2025',
      title: 'Multidimensional Characteristics and Causes of Personal Mobility (PM) Accidents',
      venue: 'Korea Society of IT Services, Spring Conference',
      date: '2025.05',
      href: '/research/pm-accident',
    },
  ],
  skillGroups: [
    {
      name: 'Generative AI content',
      items: [
        {
          name: 'Seedance 2.5, Higgsfield',
          reason: 'To test many video formats quickly with a small team',
          usage: 'AI content SNS experiment, MITHRIL',
        },
        {
          name: 'Gemini',
          reason: 'To iterate fast on planning drafts and research summaries',
          usage: 'Trend research, content planning',
        },
      ],
    },
    {
      name: 'AI service design',
      items: [
        {
          name: 'LangChain, RAG',
          reason: 'Accuracy-critical domains need generation grounded in retrieved sources',
          usage: 'Personalized docent AI',
        },
        {
          name: 'LangGraph',
          reason: 'To manage the flow and state of several agents in one place',
          usage: 'IN-Fit multi-agent design',
        },
      ],
    },
    {
      name: 'Data analysis',
      items: [
        {
          name: 'BERTopic, sentiment analysis',
          reason: 'To structure large volumes of written feedback with consistent criteria',
          usage: 'Docent UX study, Melon, OSMU',
        },
        {
          name: 'CCA, network analysis',
          reason: 'To see how categorical factors connect to each other',
          usage: 'PM accident study',
        },
      ],
    },
  ],
  awards: [
    { title: 'IN-Fit, Grand Prize', issuer: 'Korea Digital Industry Society & Korea Smart Media Society', date: '2026.04' },
    { title: 'AI learning agent for middle-aged adults, Excellence Award', issuer: 'Yonsei University Community Experiential Learning Contest', date: '2025.12' },
    { title: 'Hotel recommendation AI chatbot, Service Track Award', issuer: 'Kensington College of Business Hackathon', date: '2025.08' },
  ],
  certificates: [
    { title: 'SQLD', issuer: 'Korea Data Agency', date: '2026.03' },
    { title: 'OPIc IM1', issuer: 'ACTFL', date: '2025.12', note: 'Valid until 2027.12' },
    { title: 'ADsP', issuer: 'Korea Data Agency', date: '2025.09' },
  ],
  activities: [
    { title: 'AI Content Planning Intern', issuer: 'Stellar&', date: '2025 - present' },
    { title: 'SoDAlab lab website', issuer: 'SoDAlab', date: '2025' },
    { title: 'SoDAlab Instagram channel', issuer: 'SoDAlab', date: '2025' },
  ],
  contactTitle: 'I plan by closing the gap between the people who make things and the people who see them.',
  contactBody: 'Web novels or short-form video, I’d love to talk.',
}
