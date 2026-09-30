import type { Work } from '../../types'
import { img } from '../assets'
import { MUSE_EN, TALKY_OWL_EN } from './works-dev'

export const WORKS_EN: Work[] = [
  {
    slug: 'mithril',
    kind: 'project',
    title: 'MITHRIL',
    summary: 'A platform that adapts web novels into AI video. Details will be shared after launch.',
    period: '2026.07 - 2026.10',
    team: 'Stellar&',
    role: 'AI Content Planning Intern',
    tags: ['AI video', 'Web novels', 'Service planning'],
    cover: { tone: 'navy', image: img('mithril-home.webp'), imageAlt: 'MITHRIL creation mode selection screen', imagePosition: 'left top' },
    isPrivate: true,
    featured: true,
    contribution: null,
  },
  {
    slug: 'infit',
    kind: 'project',
    title: 'IN-Fit',
    summary:
      'A multimodal AI agent that reads the content itself, not just follower counts, to score brand and influencer fit.',
    period: '2026.04',
    team: 'Jungmin Park, Jinseo Park, Chaeyeon Kang',
    role: 'Planning and direction',
    venue: 'Korea Digital Industry Society & Korea Smart Media Society Spring Conference',
    award: 'Grand Prize',
    tags: ['Multimodal AI', 'LangGraph', 'Service planning'],
    cover: { tone: 'accent', image: img('infit-home.png'), imageAlt: 'IN-Fit home screen' },
    featured: true,
    contribution: null,
    detail: {
      overview: [
        'Brands choosing influencers tend to rely on narrow metrics like follower counts and views. Numbers alone cannot tell whether a creator’s tone actually fits the brand, so we planned a multimodal AI agent that reads images and video as well as text.',
        'The evaluation framework is built on the three factors of Source Credibility Theory (Ohanian, 1990): expertise, trustworthiness, and attractiveness. Seven specialized agents run in sequence, from candidate discovery to the final score.',
      ],
      problem: [
        'Existing platforms such as HypeAuditor, Upfluence, and Mafia-X focus on quantitative metrics like followers, views, and engagement rate, missing context and quality.',
        'None of them let AI analyze the actual video, text, and images to judge brand fit.',
        'The final call still depends on a marketer reviewing content by hand.',
      ],
      approach: [
        {
          title: 'Problem definition',
          body: 'Compared four platforms in Korea and abroad and defined “no qualitative content evaluation” as the core gap.',
        },
        {
          title: 'Evaluation design',
          body: 'Split expertise, trustworthiness, and attractiveness into voice, text, and video-frame cues, each with its own weight.',
        },
        {
          title: 'Steering direction',
          body: 'When discussion drifted toward text-only methods, I raised the question “is this still a multimodal design?” and the team realigned with the original goal.',
        },
        {
          title: 'Agent structure',
          body: 'Designed a flow where seven agents divide the work under a LangGraph orchestrator.',
        },
      ],
      flow: [
        'Brand input',
        'Candidate search',
        'Fake-signal index',
        'Expertise, trust, appeal scoring',
        'Risk screening',
        'Final score report',
      ],
      stack: [
        {
          name: 'LangGraph',
          reason: 'The order and state of seven agents had to be managed in a single graph',
          usage: 'Orchestrator and agent analysis flow',
        },
        {
          name: 'GPT-4V, Whisper',
          reason: 'Text alone cannot capture video tone or how credible a speaker sounds',
          usage: 'Frame aesthetics, vocal tone, and exaggeration analysis',
        },
        {
          name: 'YouTube Data API',
          reason: 'To build candidate pools from real channel data',
          usage: 'Collecting 50 keyword-based candidates and metadata',
        },
      ],
      gallery: [
        { src: img('infit-input.png'), caption: 'Entering brand requirements' },
        { src: img('infit-analysis.png'), caption: 'Agents running the analysis' },
        { src: img('infit-result.png'), caption: 'Recommended channels with scores' },
        { src: img('infit-reject.png'), caption: 'Rejected channels and reasons' },
      ],
      results: [
        'Grand Prize, Korea Digital Industry Society & Korea Smart Media Society joint conference (2026.04)',
        'Proposed an evaluation model that shifts influencer selection from raw metrics to content quality',
      ],
      retrospective: [
        'I hesitated, wondering if I was the only one who saw the problem. I learned that speaking up when a project drifts from its purpose is part of a planner’s job.',
        'A good evaluation framework needs theoretical grounding to be convincing, even inside the team.',
      ],
    },
  },
  TALKY_OWL_EN,
  MUSE_EN,
  {
    slug: 'docent',
    kind: 'project',
    title: 'Personalized Docent AI and a UX follow-up study',
    summary:
      'Built a RAG docent that adapts explanations to each visitor, then ran a follow-up study on how the experience actually felt.',
    period: '2025.11 - 2026.08',
    team: 'Jungmin Park, Jinseo Park, Minho Song, Sohyun Lee',
    role: 'Planning, first author of follow-up study',
    venue: 'Korea Society of IT Services',
    award: 'Journal paper',
    tags: ['LangChain', 'RAG', 'BERTopic'],
    cover: { tone: 'navy' },
    featured: true,
    contribution: null,
    detail: {
      overview: [
        'Unlike a traditional audio guide that reads the same script for every artwork, we planned a LangChain and RAG docent AI that adjusts its explanation to each visitor’s interests and background.',
        'The presentation went well, but “the technology works” and “users feel it is a good experience” are different questions. Nobody asked me to, but I carried that question into a follow-up study.',
      ],
      problem: [
        'Existing audio guides give every visitor the same explanation.',
        'There was no user-side evidence of what kind of experience a generative docent provides.',
      ],
      approach: [
        {
          title: 'Docent AI design',
          body: 'Built a vector knowledge base of exhibits and a RAG pipeline that adjusts depth and vocabulary to the visitor profile.',
        },
        {
          title: 'Feedback collection',
          body: 'Collected written reviews from visitors who used the prototype.',
        },
        {
          title: 'Topic modeling',
          body: 'Used BERTopic to structure the reviews into core attributes of the user experience.',
        },
        {
          title: 'UX improvements',
          body: 'Discussed the derived attributes with the team and turned them into improvement directions.',
        },
      ],
      flow: ['Knowledge base', 'RAG explanations', 'User reviews', 'BERTopic analysis', 'UX improvements'],
      stack: [
        {
          name: 'LangChain, RAG',
          reason: 'Exhibit information must be accurate, so sources are retrieved before generating',
          usage: 'Artwork knowledge retrieval and multi-turn explanations',
        },
        {
          name: 'BERTopic',
          reason: 'Written reviews are long and varied, so manual coding would be inconsistent',
          usage: 'Topic modeling of reviews and UX attribute extraction',
        },
      ],
      publications: [
        {
          title: 'Personalized Docent Generation AI Using LangChain and RAG',
          authors: 'Jungmin Park, Jinseo Park, Minho Song, Sohyun Lee',
          venue: 'Korea Society of IT Services, Fall Conference',
          date: '2025.11.12',
        },
        {
          title: 'Deriving Key Attributes of Docent User Experience and UX Improvements Using BERTopic Modeling',
          authors: 'Jungmin Park et al.',
          venue: 'Journal of Information Technology Services',
          date: '2026.08',
        },
      ],
      results: [
        'Presented at the Korea Society of IT Services Fall Conference (2025.11)',
        'Published in the Journal of Information Technology Services as first author (2026.08)',
      ],
      retrospective: [
        'I learned that validating the technology and validating the experience are separate steps.',
        'Taking my own question all the way to a published study made “why” the first thing I ask in every project.',
        'This research now continues in MUSE, a personal project that builds the docent as a real service.',
      ],
    },
  },
  {
    slug: 'sns-experiment',
    kind: 'project',
    title: 'AI content SNS experiment: Byeolsu and Arin',
    summary:
      'Ran three AI content formats myself and found that what splits reactions is viewer taste, not whether it is AI.',
    period: '2025 - 2026',
    team: 'Stellar&',
    role: 'Content planning, trend research',
    award: 'Top video 143K views',
    tags: ['Seedance 2.5', 'Short-form', 'Trend research'],
    cover: { tone: 'paper' },
    featured: true,
    contribution: null,
    detail: {
      overview: [
        'I ran three content lines and compared reactions: “Byeolsu” for office workers in their 20s and 30s, “Arin,” an IP character for a global audience, and the emerging live-action AI drama format.',
      ],
      problem: ['We needed real channel data on how audiences receive content made with AI.'],
      approach: [
        { title: 'Audience split', body: 'Designed each line for a different audience: Korean office workers, global viewers, and drama fans.' },
        { title: 'Production and operation', body: 'Produced videos with generative tools such as Seedance 2.5 and handled uploads and channel operation.' },
        { title: 'Reaction comparison', body: 'Compared views and follower conversion to see how each format performed.' },
      ],
      stack: [
        {
          name: 'Seedance 2.5, Higgsfield',
          reason: 'A small team needed to test several formats quickly',
          usage: 'Character short-form and live-action drama videos',
        },
      ],
      results: [
        'A single Byeolsu video peaked at 143K views',
        'High views but low follower conversion showed that reactions depend on matching viewer taste, not on whether content is AI-made',
      ],
      retrospective: [
        'Views measure curiosity, follows measure expectation. In the next experiment I want to design for conversion from the start.',
      ],
    },
  },
  {
    slug: 'osmu',
    kind: 'project',
    category: 'data',
    title: 'Webtoon and web novel adaptation (OSMU) insights',
    summary: 'An industry project that used UGC sentiment analysis to find what engages viewers when web novels become animation.',
    period: '2025.11 - 2026.01',
    team: 'Jungmin Park, Jinseo Park',
    role: 'Data analysis, insights',
    venue: 'Industry project with Stellar&',
    tags: ['UGC', 'Sentiment analysis', 'OSMU'],
    cover: { tone: 'navy' },
    contribution: null,
    detail: {
      overview: [
        'We analyzed reviews and community posts to learn where audiences feel satisfied or let down when web novels and webtoons are adapted into animation or drama. Only publicly shareable parts are included here.',
      ],
      problem: [
        'There was little data on which source elements drive an adaptation’s success.',
        'Fan reactions scattered across communities needed to become structured insight.',
      ],
      approach: [
        { title: 'UGC collection', body: 'Collected reviews and community posts about originals and their adaptations.' },
        { title: 'Sentiment analysis', body: 'Compared sentiment before and after adaptation and extracted keywords.' },
        { title: 'Engagement points', body: 'Grouped reactions by element: characters, story, art, and music.' },
      ],
      flow: ['UGC collection', 'Sentiment analysis', 'Element grouping', 'Competitor comparison', 'Recommendations'],
      results: [
        'Early sentiment is driven largely by character visuals and voice casting',
        'Existing fans react to story faithfulness, while newcomers respond to world-building and growth arcs',
      ],
      retrospective: [
        'In industry work, results feed directly into decisions, so clarity of delivery matters as much as accuracy.',
      ],
    },
  },
  {
    slug: 'hotel-chatbot',
    kind: 'project',
    category: 'ai',
    title: 'Review-based hotel recommendation AI chatbot',
    summary: 'A chatbot that breaks guest reviews into attributes and recommends hotels with evidence, from natural-language questions.',
    period: '2025.08',
    team: 'Jungmin Park, Subin Ju',
    role: 'Service planning, data design',
    venue: 'Kensington College of Business Global AI & SW Hackathon',
    award: 'Service Track Award',
    tags: ['Chatbot', 'Personalization', 'Hackathon'],
    cover: { tone: 'mint' },
    contribution: null,
    detail: {
      overview: [
        'Instead of star ratings, this chatbot analyzes what guests actually wrote to recommend hotels for specific needs like “quiet and close to downtown.”',
      ],
      problem: [
        'Existing recommendations focus on price and ratings and miss personal preferences.',
        'There was no way to get the key points without reading hundreds of reviews.',
      ],
      approach: [
        { title: 'Review preprocessing', body: 'Classified reviews by attribute: cleanliness, location, service, and facilities.' },
        { title: 'Attribute indexing', body: 'Embedded reviews per attribute and stored them as vectors.' },
        { title: 'Conversational recommendations', body: 'Interpreted natural-language questions and explained each recommendation with review evidence.' },
      ],
      flow: ['Review collection', 'Attribute tagging', 'Embedding', 'Chat recommendation', 'Evidence'],
      results: ['Service Track Award at a global hackathon (2025.08)', 'Demoed a working chatbot prototype'],
      retrospective: ['At a hackathon, a clear problem and quickly proven user value matter more than perfect technology.'],
    },
  },
  {
    slug: 'edu-agent',
    kind: 'project',
    category: 'ai',
    title: 'Personalized AI learning agent for middle-aged adults',
    summary: 'An agent that recommends learning content by digital skill level and goals, narrowing the digital divide for adults in midlife.',
    period: '2025.12',
    team: 'Jungmin Park, Seonghoe Jung, Jinseo Park, Chaeyeon Kang',
    role: 'Service planning',
    venue: 'Yonsei University Community Experiential Learning Contest',
    award: 'Excellence Award',
    tags: ['AI agent', 'Recommendation', 'Social impact'],
    cover: { tone: 'accent' },
    contribution: null,
    detail: {
      overview: [
        'We designed an AI agent that helps middle-aged adults left behind by digital transformation find learning that matches their level.',
      ],
      problem: [
        'Existing digital education ignores age and skill level, so participation and retention are low.',
        'Dropout rates are high in self-directed learning.',
      ],
      approach: [
        { title: 'Onboarding', body: 'A conversational interview identifies digital skills, goals, and available time.' },
        { title: 'Personalized path', body: 'Recommends a learning path and content based on the profile.' },
        { title: 'Retention', body: 'Tracks progress and sends encouragement to learners at risk of dropping out.' },
      ],
      flow: ['Skill check', 'Profile', 'Curriculum', 'Progress tracking', 'Re-recommend'],
      results: ['Excellence Award, Yonsei University Community Experiential Learning Contest (2025.12)'],
      retrospective: ['The heart of a recommender is how well it understands people, not the algorithm.'],
    },
  },
  {
    slug: 'kyobo',
    kind: 'project',
    category: 'ux',
    title: 'Kyobo E-book review UX/UI improvements',
    summary: 'Diagnosed friction in writing and browsing reviews and proposed improvements through competitor benchmarking.',
    period: '2024.12',
    team: 'Jungmin Park, Seunga Jung, Eunji Nam',
    role: 'UX research, improvement design',
    tags: ['UX research', 'Benchmarking', 'Redesign'],
    cover: { tone: 'paper' },
    contribution: null,
    detail: {
      overview: [
        'Reviews strongly influence purchases on digital reading platforms, yet the Kyobo E-book app’s review experience had several points of friction.',
      ],
      problem: [
        'A complicated path to writing reviews makes people give up.',
        'There are few ways to filter and sort reviews by purpose.',
        'Unverified reviews lower trust.',
      ],
      approach: [
        { title: 'Current-state audit', body: 'Walked through the existing review flow and listed problems.' },
        { title: 'Benchmarking', body: 'Compared review UX with Millie’s Library and RIDIBOOKS.' },
        { title: 'Journey mapping', body: 'Visualized the journey from browsing and reading reviews to purchase and writing a review.' },
      ],
      flow: ['Browse', 'Read reviews', 'Purchase', 'Finish reading', 'Write review'],
      results: [
        'Proposed prompting reviews right after a book is finished',
        'Designed tag-based review filters and verified-purchase badges for easier browsing and more trust',
      ],
      retrospective: ['UI changes alone have limits for review participation; designing the motivation is the key.'],
    },
  },
  {
    slug: 'melon',
    kind: 'project',
    category: 'data',
    title: 'Melon UGC sentiment analysis and marketing strategy',
    summary: 'Used app review data to identify satisfaction and pain points, then derived a positioning strategy against competitors.',
    period: '2025.12',
    team: 'Jungmin Park, Giung Nam, Jin Eo',
    role: 'Data analysis, strategy',
    venue: 'E-Marketing course',
    tags: ['Sentiment analysis', 'Topic modeling', 'Marketing strategy'],
    cover: { tone: 'navy' },
    contribution: null,
    detail: {
      overview: [
        'We collected Melon app reviews, analyzed what users like and dislike, and proposed a strategy against Spotify and YouTube Music.',
      ],
      problem: [
        'Spotify’s entry into Korea and the growth of YouTube Music threatened Melon’s market share.',
        'User feedback in reviews had not been analyzed systematically, so priorities were unclear.',
      ],
      approach: [
        { title: 'Data collection', body: 'Crawled and cleaned app store reviews.' },
        { title: 'Sentiment classification', body: 'Labeled reviews as positive, negative, or neutral and extracted keywords.' },
        { title: 'Topic modeling', body: 'Grouped satisfaction and pain points by theme.' },
        { title: 'Strategy', body: 'Turned findings into an action plan using STP and the 4Ps.' },
      ],
      flow: ['Review crawling', 'Sentiment labeling', 'Topic modeling', 'Competitor comparison', 'STP · 4P strategy'],
      results: [
        'Strengths: Korean artist catalog, lyrics, chart credibility',
        'Pain points: ads, UI friction, complex pricing',
        'Proposed K-content differentiation and a simpler subscription UX',
      ],
      retrospective: ['Sentiment labels are not enough; you need topic-level context to see why reactions turn positive or negative.'],
    },
  },
  {
    slug: 'pm-accident',
    kind: 'research',
    title: 'Personal mobility (PM) accident factor analysis',
    summary: 'Research using CCA and network analysis to identify the multidimensional traits and severity factors of PM accidents.',
    period: '2025.05 - 2025.09',
    team: 'Jungmin Park, Jinseo Park, Minho Song, Sohyun Lee, et al.',
    role: 'Data analysis, paper writing',
    venue: 'Knowledge Management Research',
    award: 'KCI journal',
    tags: ['CCA', 'Network analysis', 'Public data'],
    cover: { tone: 'accent' },
    contribution: null,
    detail: {
      overview: [
        'We analyzed Korean National Police Agency accident data on e-scooters and e-bikes with CCA and network analysis to identify what drives accident severity for each accident type.',
      ],
      problem: [
        'It was unclear how PM accident factors relate to each other.',
        'There was little evidence on how severity factors differ by accident type.',
      ],
      approach: [
        { title: 'Data collection', body: 'Collected and preprocessed public PM traffic accident data.' },
        { title: 'CCA clustering', body: 'Clustered accidents into crosswalk, intersection, and sidewalk types.' },
        { title: 'Network analysis', body: 'Identified key interaction factors by severity level within each type.' },
      ],
      flow: ['Public data', 'Preprocessing', 'CCA', 'Network analysis', 'Severity factors'],
      publications: [
        {
          title: 'Multidimensional Characteristics and Causes of Personal Mobility (PM) Accidents: A CCA and Network Analysis Approach',
          authors: 'Jungmin Park, Jinseo Park, Minho Song, Sohyun Lee',
          venue: 'Korea Society of IT Services, Spring Conference',
          date: '2025.05.14',
        },
        {
          title: 'Associated Factors Influencing Accident Severity Across Personal Mobility (PM) Accident Types: CCA and Network Analysis Approach',
          authors: 'Jinseo Park, Jungmin Park, Minho Song, Junghwa Kim, So-Hyun Lee',
          venue: 'Knowledge Management Research 26(3), pp.261-284',
          date: '2025.09',
          url: 'https://doi.org/10.15813/kmr.2025.26.3.013',
        },
      ],
      results: [
        'Presented at the Korea Society of IT Services Spring Conference (2025.05)',
        'Published in Knowledge Management Research, a KCI journal (2025.09)',
        'Found that the interaction factors raising severity differ by accident type',
      ],
      retrospective: ['The same data can reveal an entirely different structure when you change the method.'],
    },
  },
]
