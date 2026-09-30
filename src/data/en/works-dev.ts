import type { Work } from '../../types'
import { img } from '../assets'

// Front-end build projects (from the portfolio PDF)
export const TALKY_OWL_EN: Work = {
  slug: 'talky-owl',
  kind: 'project',
  title: 'Talky Owl',
  summary: 'An AI conflict-mediation service that hears both sides and suggests a verdict and a way to apologize. I built the home, case history, and AI verdict screens.',
  period: '2026.06.03 - 2026.06.30',
  team: 'Team project',
  role: 'Front-end development',
  venue: 'AI Vibe Coding Front-end Bootcamp X Mainbiz Association',
  tags: ['Next.js', 'TanStack Query', 'Gemini API'],
  cover: { tone: 'mint', image: img('talkyowl-cover.webp'), imageAlt: 'Talky Owl landing screen', imagePosition: 'center' },
  featured: true,
  contribution: null,
  liveUrl: 'https://talky-owl-iota.vercel.app',
  repoUrl: 'https://github.com/wjdalss21/TALKY-OWL',
  detail: {
    overview: [
      'Describe a conflict with a partner, friend, coworker, or family member, and the AI returns a verdict along with a suggestion like “How about apologizing this way?”',
      'On the team, I owned the front end for the home, case history, and AI verdict pages.',
    ],
    problem: [
      'The closer the relationship, the harder it is to step back and see who was at fault.',
      'Verdicts and statistics had to stay reliable across refreshes and repeated renders.',
    ],
    approachTitle: 'My Role',
    approach: [
      {
        title: 'Home page',
        body: 'Visualized conflict ratios by category and placed cards for ongoing cases and for starting an emotion diary.',
      },
      {
        title: 'Case history page',
        body: 'Filtered completed cases by category and loaded the history with infinite scroll, linking into each case.',
      },
      {
        title: 'AI verdict page',
        body: 'Branched between solo and 1:1 modes, and for 1:1 cases visualized each side’s share of fault in a comparison graph.',
      },
      {
        title: 'Conflict type cards',
        body: 'Split the verdict and type tabs, designed 16 conflict-type cards, and added sharing.',
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
        reason: 'To share a cache keyed by conflict ID, avoiding duplicate requests and keeping data after refresh',
        usage: 'AI verdicts, case history',
      },
      {
        name: 'Next.js API Routes',
        reason: 'To keep aggregation on the server and presentation on the front end',
        usage: 'Home page conflict statistics',
      },
      {
        name: 'Gemini API',
        reason: 'To analyze each side’s account and generate a verdict and apology suggestion',
        usage: 'AI verdict generation',
      },
    ],
    gallery: [
      { src: img('talkyowl-screens.webp'), caption: 'Home, case history, AI verdict' },
      { src: img('talkyowl-verdict.webp'), caption: 'Solo verdict, 1:1 fault comparison, conflict type' },
      { src: img('talkyowl-types.webp'), caption: 'Some of the 16 conflict-type cards' },
    ],
    troubleshooting: [
      {
        title: 'Verdicts disappeared on refresh',
        problem: 'The verdict was fetched in a parent component and passed down as props, so a refresh showed an empty screen.',
        approach: 'Had each component call TanStack Query hooks directly, keyed by conflict ID.',
        result: 'With a shared cache, data now shows correctly after refresh without duplicate API calls.',
      },
      {
        title: 'Moving statistics out of the render path',
        problem: 'Category percentages were calculated in front-end hooks, repeating the math on every render and duplicating logic.',
        approach: 'Moved the percentage calculation into the API and returned only the results.',
        result: 'Removed the render cost and clearly split responsibilities: aggregation on the back end, presentation on the front end.',
      },
    ],
    results: [
      'Built and shipped three pages: home, case history, and AI verdict',
      'Fixed empty screens on refresh with a shared TanStack Query cache',
      'Removed render overhead by moving statistics into the API',
    ],
    retrospective: ['Deciding where data is calculated and where it is fetched shapes how stable a screen feels.'],
  },
}

export const MUSE_EN: Work = {
  slug: 'muse',
  kind: 'project',
  title: 'MUSE, an AI docent platform',
  summary: 'An AI docent that explains artworks in the perspective and tone you choose. I am turning the docent from my research into a real service.',
  period: '2026.06.20 - ongoing',
  team: 'Personal project',
  role: 'Planning, design, development',
  tags: ['Next.js', 'Claude API', 'Supabase'],
  cover: { tone: 'mint', image: img('docent-hero.webp'), imageAlt: 'MUSE AI docent start screen', imagePosition: 'center 32%' },
  featured: true,
  contribution: null,
  liveUrl: 'https://muse-nu-lemon.vercel.app/',
  repoUrl: 'https://github.com/wjdalss21/Docent',
  detail: {
    overview: [
      'Instead of a guide that reads the same script for every artwork, MUSE writes explanations that match the tone and depth each visitor picks.',
      'It is a personal project that takes the personalized docent from my research and makes it something people can actually use.',
    ],
    problem: [
      'Every visitor has different interests and background, but there is only one explanation.',
      'AI explanations cost money per request, so repeated identical requests waste budget.',
    ],
    approachTitle: 'Key Features (MVP)',
    approach: [
      { title: 'Artwork list', body: 'Artwork cards, search by title or artist, and QR scanning that jumps straight to a piece.' },
      {
        title: 'Tone selection',
        body: 'Four tone cards (formal, humorous, child-friendly, reflective) plus a slider for depth of explanation.',
      },
      { title: 'Artwork detail', body: 'Streams explanations by tab: background, meaning and symbolism, and relationships.' },
      { title: 'Q&A chatbot', body: 'Visitors can keep asking questions based on the explanation.' },
    ],
    flow: ['QR scan', 'Tone & depth', 'Cache lookup', 'Claude explanation', 'Chat Q&A'],
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
        reason: 'To generate explanations matched to the chosen tone and depth',
        usage: 'Streaming explanations by attribute, chatbot Q&A',
      },
      {
        name: 'Supabase',
        reason: 'To cache explanations and remove the cost of repeated requests',
        usage: 'docent_cache table',
      },
    ],
    gallery: [{ src: img('docent-screens.webp'), caption: 'Artwork list, tone selection, artwork explanation, QR scan' }],
    troubleshooting: [
      {
        title: 'Paying twice for the same explanation',
        problem: 'The Claude API bills per request, so asking again for the same artwork, attribute, and tone wasted money.',
        approach:
          'Designed a docent_cache table with a composite unique key (artwork_id, attribute, tone). The Route Handler checks the cache first: on a hit it returns immediately, on a miss it calls Claude and stores the result.',
        result: 'Caching every artwork × 3 attributes × 4 tones means repeat requests are answered instantly with no API cost.',
      },
    ],
    results: ['Built and shipped four MVP features', 'Removed API cost for repeat requests through caching'],
    nextSteps: [
      { title: 'Audio guide', body: 'Explanations are text-only today; next, Claude’s output will be converted to speech with TTS.' },
      {
        title: 'Multilingual support',
        body: 'Museums see many international visitors, so a language parameter will reuse the existing cache structure for translated explanations.',
      },
    ],
    retrospective: ['An AI feature only lasts as a service if its cost structure is designed alongside its quality.'],
  },
}
