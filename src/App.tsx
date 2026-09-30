import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import SkipLink from './components/SkipLink'
import { LanguageProvider } from './i18n/LanguageProvider'
import { TooltipProvider } from './components/ui/tooltip'

export default function App() {
  return (
    <LanguageProvider>
    <TooltipProvider delayDuration={150}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <SkipLink />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<WorkDetail />} />
          <Route path="/research/:slug" element={<WorkDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  )
}
