import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LeadFormProvider } from './context/LeadFormContext'
import Nav from './components/Nav'
import LeadFormModal from './components/LeadFormModal'
import Dist from './pages/Dist'
import Solutions from './pages/Solutions'
import Analytics from './pages/Analytics'
import ESG from './pages/ESG'
import Company from './pages/Company'
import EngineeringCulture from './pages/EngineeringCulture'
import Contact from './pages/Contact'
import VideoIntelligence from './pages/VideoIntelligence'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Home from "./pages/Home.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <LeadFormProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <LeadFormModal />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dist" element={<Dist />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/esg" element={<ESG />} />
            <Route path="/company" element={<Company />} />
            <Route path="/engineering-culture" element={<EngineeringCulture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video-intelligence" element={<VideoIntelligence />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LeadFormProvider>
  )
}
