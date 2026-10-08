import { useState } from 'react'
import './Footer.css'

const HELP_LINKS = [
  { page: 'faq', label: 'FAQs' },
  { page: 'contact', label: 'Contact' },
  { page: 'about', label: 'About Us' },
  { page: 'blog', label: 'Blog' },
]

const SERVICE_LINKS = [
  { page: 'services', label: 'DBA Services' },
  { page: 'services', label: 'Application Support' },
  { page: 'services', label: 'DevOps' },
  { page: 'services', label: 'Managed IT Services' },
  { page: 'services', label: 'Training & Placement' },
]

const SOCIALS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    color: '#ff0000',
    icon: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    color: '#1877f2',
    icon: <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4C16.5 3.3 15.5 3.2 14.4 3.2c-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5V13h2.8v8h3.2Z" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    color: '#d62976',
    icon: (
      <>
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Z" />
        <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z" />
        <circle cx="17.2" cy="6.8" r="1.1" />
      </>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    color: '#0a66c2',
    icon: <path d="M4.5 9h3.6v11H4.5V9Zm1.8-5.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM10.2 9h3.4v1.5h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5V20h-3.6v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3.6V9Z" />,
  },
]

export default function Footer({ onNavigate = () => {} }) {
  const [email, setEmail] = useState('')

  const go = (page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const subscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="ft">
      <div className="ft-wrap">



        {/* Columns */}
        <div className="ft-grid">

          <div className="ft-col ft-col--contact">
            <h3 className="ft-head">Get in touch</h3>
            <ul className="ft-contact">
              <li>
                <span className="ft-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
                </span>
                <span>
                  <span className="ft-label">Call us directly?</span>
                  <a className="ft-value" href="tel:+919890073789">(+91) 98900-73789</a>
                </span>
              </li>
              <li>
                <span className="ft-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                </span>
                <span>
                  <span className="ft-label">Address</span>
                  <a className="ft-value" href="https://www.google.com/maps/search/502,+4th+Floor,+Dangat+Patil+Empire,+Kudale+Baug,+Vadgaon+Budruk,+Pune,+Maharashtra+411041/@18.4603799,73.8211911,17z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Pune</a>
                </span>
              </li>
              <li>
                <span className="ft-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </span>
                <span>
                  <span className="ft-label">Email</span>
                  <a className="ft-value" href="mailto:info@mayaratech.com">info@mayaratech.com</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="ft-col">
            <h3 className="ft-head">Need some help?</h3>
            <ul className="ft-links">
              {HELP_LINKS.map(({ page, label }) => (
                <li key={label}>
                  <button className="ft-link" onClick={() => go(page)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h3 className="ft-head">Our services</h3>
            <ul className="ft-links">
              {SERVICE_LINKS.map(({ page, label }) => (
                <li key={label}>
                  <button className="ft-link" onClick={() => go(page)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col ft-col--social">
            <h3 className="ft-head">Follow us</h3>
            <ul className="ft-socials">
              {SOCIALS.map(({ name, href, color, icon }) => (
                <li key={name}>
                  <a className="ft-social" href={href} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill={color} aria-hidden="true">{icon}</svg>
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bar">
        <div className="ft-bar-inner">
          <nav className="ft-legal" aria-label="Legal">
            <a href="#terms">Terms of use</a>
            <a href="#privacy">Privacy policy</a>
            <a href="#cookies">Cookies policy</a>
          </nav>

          <p className="ft-copy">&copy; {new Date().getFullYear()} MayaraTech. All rights reserved.</p>

          <button
            className="ft-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 15 6-6 6 6" /></svg>
          </button>
        </div>
      </div>
    </footer>
  )
}