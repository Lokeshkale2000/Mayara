import { useState, useEffect, useRef } from 'react'
import logo from '../assets/icon-192.webp'

const LINKS = [
  { page: 'home', label: 'Home' },
  { page: 'about', label: 'About Us' },
  { page: 'services', label: 'Services' },
  { page: 'gallery', label: 'Gallery' },
  { page: 'blog', label: 'Blog' },
  { page: 'faq', label: 'FAQs' },
  { page: 'contact', label: 'Contact' },
]

export default function Navbar({ currentPage, onNavigate, cartCount = 0 }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Set --nb-h CSS variable so hero can use calc(95vh - var(--nb-h))
  useEffect(() => {
    if (!ref.current) return
    const update = () => {
      document.documentElement.style.setProperty('--nb-h', ref.current.offsetHeight + 'px')
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  const go = (page) => { onNavigate(page); setOpen(false) }

  return (
    <header className="nb" ref={ref}>
      <div className="nb-inner">

        {/* Logo */}
        <button className="nb-brand" onClick={() => go('home')} aria-label="Go to home">
          <img src={logo} alt="" className="nb-logo" />
          <span className="nb-name">MayaraTech</span>
        </button>

        {/* Nav Links */}
        <nav className={`nb-menu${open ? ' open' : ''}`}>
          <ul className="nb-list">
            {LINKS.map(({ page, label }) => (
              <li key={page}>
                <button
                  className={`nb-link${currentPage === page ? ' active' : ''}`}
                  onClick={() => go(page)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="nb-actions">
          <button className="nb-icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          </button>

          <button className="nb-icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L20 7H6" /><circle cx="9.5" cy="20" r="1.2" /><circle cx="17" cy="20" r="1.2" /></svg>
            {cartCount > 0 && <span className="nb-badge">{cartCount}</span>}
          </button>

          <button className="nb-login" onClick={() => alert('Login')}>Login</button>

          <button className="nb-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open
              ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
              : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            }
          </button>
        </div>

      </div>
    </header>
  )
}
