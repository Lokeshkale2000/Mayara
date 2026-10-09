import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import './index.css'

const PAGES = {
  courses: Courses,
  home: Home,
  about: About,
  services: Services,
  blog: Blog,
  faq: FAQ,
  contact: Contact,
}

// Map URL path → page key
function pathToPage(path) {
  const map = {
    '/courses': 'courses',
    '/': 'home',
    '/about': 'about',
    '/services': 'services',
    '/blog': 'blog',
    '/faq': 'faq',
    '/contact': 'contact',
  }
  return map[path] || 'home'
}

export default function App() {
  const [page, setPage] = useState(() => pathToPage(window.location.pathname))

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (key) => {
    const path = key === 'home' ? '/' : `/${key}`
    window.history.pushState({}, '', path)
    setPage(key)
  }

  const Page = PAGES[page] || Home

  return (
    <>
      <Navbar currentPage={page} onNavigate={navigate} cartCount={3} />
      <Page onNavigate={navigate} />
      <Footer onNavigate={navigate} />
    </>
  )
}
