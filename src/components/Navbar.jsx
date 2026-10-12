import { useState, useEffect, useRef } from 'react'
import logo from '../assets/mayaratech-logo-horizontal-transparent.png'

const LINKS = [
  { page: 'home', label: 'Home' },
  { page: 'courses', label: 'Courses' },
  { page: 'about', label: 'About Us' },
  { page: 'services', label: 'Services' },
  { page: 'faq', label: 'FAQs' },
  { page: 'contact', label: 'Contact' },
]

export default function Navbar({ currentPage, onNavigate, search = '', onSearch }) {
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)
  const ref = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); onSearch('') }
    }
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
      <style>{nbSearchCss}</style>
      <div className="nb-inner">

        {/* Logo */}
        <button className="nb-brand" onClick={() => go('home')} aria-label="Go to home">
          <img src={logo} alt="" className="nb-logo" />

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
          <div className="nb-search">
            <svg className="nb-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
            <input
              ref={inputRef}
              className="nb-search-input"
              type="search"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              aria-label="Search courses"
            />
            {search && (
              <button className="nb-search-clear" onClick={() => { onSearch(''); inputRef.current?.focus() }} aria-label="Clear search">✕</button>
            )}
          </div>

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

const nbSearchCss = `
.nb-search {
  position: relative;
  display: flex;
  align-items: center;
}
.nb-search-icon {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: #9ca3af;
  pointer-events: none;
  flex: none;
}
.nb-search-input {
  width: 220px;
  height: 38px;
  padding: 0 36px 0 36px;
  border: 1.5px solid #e5e7eb;
  border-radius: 999px;
  background: #f9fafb;
  font: inherit;
  font-size: 1.4rem;
  color: #111827;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, width 0.3s ease;
}
.nb-search-input::placeholder { color: #9ca3af; }
.nb-search-input:focus {
  border-color: #0b84f3;
  box-shadow: 0 0 0 3px rgba(11,132,243,0.15);
  background: #fff;
  width: 280px;
}
.nb-search-clear {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #9ca3af;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 50%;
  transition: color 0.15s;
}
.nb-search-clear:hover { color: #374151; }
@media (max-width: 768px) {
  .nb-search-input { width: 160px; }
  .nb-search-input:focus { width: 200px; }
}
@media (max-width: 480px) {
  .nb-search { display: none; }
}
`
