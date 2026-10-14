import { lazy, Suspense, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Courses = lazy(() => import('./pages/Courses'))
const Contact = lazy(() => import('./pages/Contact'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Cookies = lazy(() => import('./pages/Cookies'))

const PAGES = {
  courses: Courses,
  home: Home,
  about: About,
  services: Services,
  blog: Blog,
  faq: FAQ,
  contact: Contact,
  terms: Terms,
  privacy: Privacy,
  cookies: Cookies,
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
    '/terms': 'terms',
    '/privacy': 'privacy',
    '/cookies': 'cookies',
  }
  return map[path] || 'home'
}

export default function App() {
  const [page, setPage] = useState(() => pathToPage(window.location.pathname))
  const [search, setSearch] = useState('')

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

  const handleSearch = (q) => {
    setSearch(q)
    if (q.trim()) navigate('courses')
  }

  const Page = PAGES[page] || Home

  return (
    <>
      <Navbar currentPage={page} onNavigate={navigate} search={search} onSearch={handleSearch} />
      <Suspense fallback={null}>
        <Page onNavigate={navigate} search={search} />
      </Suspense>
      <Footer onNavigate={navigate} />
    </>
  )
}
