import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Dist from './pages/Dist'
import Solutions from './pages/Solutions'
import Why7G from './pages/Why7G'
import Analytics from './pages/Analytics'
import ESG from './pages/ESG'
import Company from './pages/Company'
import Contact from './pages/Contact'
import VideoIntelligence from './pages/VideoIntelligence'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dist" element={<Dist />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/why-7g" element={<Why7G />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/esg" element={<ESG />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video-intelligence" element={<VideoIntelligence />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
