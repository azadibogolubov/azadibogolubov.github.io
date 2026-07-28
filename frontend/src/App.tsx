import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Mentoring from './pages/Mentoring'
import Music from './pages/Music'
import Testimonials from './pages/Testimonials'
import Career from './pages/Career'

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/career"
        element={
          <SiteLayout>
            <Career />
          </SiteLayout>
        }
      />

      <Route
        path="/"
        element={
          <SiteLayout>
            <Home />
          </SiteLayout>
        }
      />
      <Route
        path="/mentoring"
        element={
          <SiteLayout>
            <Mentoring />
          </SiteLayout>
        }
      />
      <Route
        path="/music"
        element={
          <SiteLayout>
            <Music />
          </SiteLayout>
        }
      />
      <Route
        path="/testimonials"
        element={
          <SiteLayout>
            <Testimonials />
          </SiteLayout>
        }
      />
    </Routes>
  )
}
