import './Courses.css'
import { useState, useMemo } from 'react'

const HAT = (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#0d8bf2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 3 9 3 12 0v-5"/>
  </svg>
)
const DOC = (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#0d8bf2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>
  </svg>
)

const S = (bg, inner) => `<svg viewBox="0 0 368 249" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true"><rect width="368" height="249" fill="${bg}"/>${inner}</svg>`

export const IMGS = {
  support: S('#0e2a47', `
    <rect x="74" y="42" width="220" height="138" rx="8" fill="#16406b" stroke="#4fb3ff" stroke-width="3"/>
    <rect x="86" y="54" width="196" height="114" rx="4" fill="#0a1d33"/>
    <rect x="98" y="68" width="60" height="8" rx="4" fill="#4fb3ff"/><rect x="98" y="86" width="120" height="6" rx="3" fill="#335f8a"/>
    <rect x="98" y="102" width="96" height="6" rx="3" fill="#335f8a"/><rect x="98" y="118" width="140" height="6" rx="3" fill="#335f8a"/>
    <circle cx="250" cy="82" r="14" fill="#ffb020"/><path d="M250 74v9M250 87v1" stroke="#0a1d33" stroke-width="3" stroke-linecap="round"/>
    <rect x="98" y="138" width="44" height="18" rx="9" fill="#27b21a"/><text x="120" y="151" font-size="11" fill="#fff" text-anchor="middle" font-family="Rubik,sans-serif">L1</text>
    <rect x="150" y="138" width="44" height="18" rx="9" fill="#0d8bf2"/><text x="172" y="151" font-size="11" fill="#fff" text-anchor="middle" font-family="Rubik,sans-serif">L2</text>
    <rect x="160" y="180" width="48" height="14" fill="#16406b"/><rect x="132" y="194" width="104" height="10" rx="5" fill="#4fb3ff"/>`),
  sql: S('#1a1446', `
    <g fill="#6c5ce7" stroke="#b8b0ff" stroke-width="2"><path d="M60 70v70c0 14 28 24 62 24s62-10 62-24V70"/><ellipse cx="122" cy="70" rx="62" ry="22" fill="#8a7dff"/></g>
    <path d="M60 105c0 14 28 24 62 24s62-10 62-24M60 138c0 14 28 24 62 24" fill="none" stroke="#b8b0ff" stroke-width="2"/>
    <g transform="translate(205 62)"><rect width="110" height="100" rx="6" fill="#0f0b2e" stroke="#b8b0ff" stroke-width="2"/><rect width="110" height="22" rx="6" fill="#ffb020"/>
    <path d="M0 44h110M0 66h110M0 88h110M36 22v78M72 22v78" stroke="#4a3fa8" stroke-width="2"/>
    <text x="55" y="16" font-size="12" text-anchor="middle" fill="#1a1446" font-family="Rubik,sans-serif">SELECT *</text></g>`),
  java: S('#0f3d3e', `
    <path d="M96 100h128v52c0 22-18 38-40 38h-48c-22 0-40-16-40-38z" fill="#fff"/>
    <path d="M224 112h20c16 0 16 36 0 36h-20" fill="none" stroke="#fff" stroke-width="10"/>
    <path d="M96 100h128v14H96z" fill="#ff7a1a"/>
    <path d="M134 84c-12-12 12-20 0-34M166 84c-12-12 12-20 0-34M198 84c-12-12 12-20 0-34" fill="none" stroke="#ffb27a" stroke-width="5" stroke-linecap="round"/>
    <text x="160" y="150" font-size="30" font-weight="500" text-anchor="middle" fill="#0f3d3e" font-family="Rubik,sans-serif">Java</text>
    <rect x="70" y="204" width="180" height="8" rx="4" fill="#1d6a6b"/>
    <text x="300" y="70" font-size="30" fill="#ff7a1a" font-family="monospace">{ }</text><text x="290" y="200" font-size="22" fill="#5fd0d2" font-family="monospace">@Boot</text>`),
  test: S('#3a1226', `
    <rect x="86" y="40" width="130" height="170" rx="8" fill="#fff"/>
    <g stroke="#3a1226" stroke-width="3" stroke-linecap="round" fill="none"><path d="M106 78l8 8 14-16"/><path d="M106 120l8 8 14-16"/><path d="M106 162l8 8 14-16" stroke="#e5484d"/></g>
    <g fill="#cfd4dc"><rect x="142" y="76" width="56" height="8" rx="4"/><rect x="142" y="118" width="56" height="8" rx="4"/><rect x="142" y="160" width="56" height="8" rx="4"/></g>
    <g transform="translate(262 120)"><ellipse cx="0" cy="8" rx="26" ry="32" fill="#e5484d"/><circle cx="0" cy="-30" r="14" fill="#e5484d"/>
    <path d="M-26 -6l-24-12M26 -6l24-12M-26 14h-28M26 14h28M-24 34l-20 16M24 34l20 16M-8 -42l-8-12M8 -42l8-12" stroke="#ff9aa0" stroke-width="4" stroke-linecap="round"/>
    <path d="M0 -18v52" stroke="#3a1226" stroke-width="3"/></g>
    <circle cx="300" cy="50" r="22" fill="#27b21a"/><path d="M290 50l7 7 13-14" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`),
  devops: S('#10201a', `
    <path d="M184 125c-24-44-72-44-72 0s48 44 72 0 72-44 72 0-48 44-72 0z" fill="none" stroke="#2fd37a" stroke-width="22" stroke-linecap="round" opacity=".9"/>
    <path d="M184 125c24-44 72-44 72 0" fill="none" stroke="#ffb020" stroke-width="22" stroke-linecap="round"/>
    <text x="148" y="132" font-size="24" font-weight="500" text-anchor="middle" fill="#fff" font-family="Rubik,sans-serif">Dev</text>
    <text x="222" y="132" font-size="24" font-weight="500" text-anchor="middle" fill="#fff" font-family="Rubik,sans-serif">Ops</text>
    <g font-size="13" fill="#9fe8c0" font-family="Rubik,sans-serif"><text x="40" y="40">Git</text><text x="300" y="40">Jenkins</text><text x="36" y="222">Docker</text><text x="268" y="222">Kubernetes</text><text x="160" y="40">CI/CD</text><text x="148" y="222">Terraform</text></g>`),
  aws: S('#16212e', `
    <path d="M104 170a40 40 0 0 1 8-79 56 56 0 0 1 108-6 46 46 0 0 1 28 85z" fill="#fff" opacity=".96"/>
    <text x="184" y="146" font-size="40" font-weight="500" text-anchor="middle" fill="#232f3e" font-family="Rubik,sans-serif">aws</text>
    <path d="M140 160c24 14 62 14 86 0" fill="none" stroke="#ff9900" stroke-width="6" stroke-linecap="round"/><path d="M218 150l10 8-14 4" fill="none" stroke="#ff9900" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <g font-size="13" fill="#ffc266" font-family="Rubik,sans-serif" text-anchor="middle"><text x="60" y="60">EC2</text><text x="310" y="60">S3</text><text x="50" y="210">IAM</text><text x="318" y="210">VPC</text><text x="184" y="40">RDS</text><text x="184" y="222">CloudWatch</text></g>`),
}

export const COURSES = [
  { t: 'Application Support', cat: 'IT',        img: 'support', s: 312, l: 24, dur: '3 Months', skills: 'L1/L2 Support, SQL, Linux, Windows, Incident Management, Monitoring, ITIL' },
  { t: 'SQL Developer',       cat: 'Developer', img: 'sql',     s: 268, l: 30, dur: '2 Months', skills: 'SQL, PL/SQL, Stored Procedures, Performance Tuning, Database Concepts' },
  { t: 'Java Developer',      cat: 'Developer', img: 'java',    s: 355, l: 42, dur: '4 Months', skills: 'Core Java, Spring Boot, REST API, SQL, Git, Microservices' },
  { t: 'Software Testing',    cat: 'IT',        img: 'test',    s: 224, l: 28, dur: '2.5 Months', skills: 'Manual Testing, SQL, API Testing, Selenium, Java/Python, Agile' },
  { t: 'DevOps Engineer',     cat: 'Developer', img: 'devops',  s: 189, l: 36, dur: '3 Months', skills: 'Linux, Git, Jenkins, Docker, Kubernetes, CI/CD, Terraform' },
  { t: 'AWS Cloud',           cat: 'IT',        img: 'aws',     s: 276, l: 34, dur: '3 Months', skills: 'EC2, S3, IAM, VPC, RDS, CloudWatch, Load Balancer, AWS Security' },
]

const CATS = ['Developer', 'IT']

export default function Courses({ onNavigate = () => {}, search = '' }) {
  const [filters, setFilters] = useState([])
  const [sort, setSort] = useState('new')
  const [hovered, setHovered] = useState(null)

  const toggle = (cat) =>
    setFilters((f) => f.includes(cat) ? f.filter((c) => c !== cat) : [...f, cat])

  const list = useMemo(() => {
    let r = filters.length ? COURSES.filter((c) => filters.includes(c.cat)) : COURSES
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      r = r.filter((c) =>
        c.t.toLowerCase().includes(q) ||
        c.skills.toLowerCase().includes(q) ||
        c.cat.toLowerCase().includes(q)
      )
    }
    if (sort === 'az') r = [...r].sort((a, b) => a.t.localeCompare(b.t))
    return r
  }, [filters, sort, search])

  return (
    <div>

      {/* Hero Banner */}
      <div className="cr-hero">
        <div className="cr-hero-inner">
          <span className="cr-hero-pill">🎓 Industry-Ready Curriculum</span>
          <h1 className="cr-hero-title">Explore Our <span>Courses</span></h1>
          <p className="cr-hero-sub">Hands-on training in the most in-demand IT skills — designed to get you placed.</p>
          <div className="cr-hero-stats">
            <div><strong>6+</strong><span>Courses</span></div>
            <div><strong>50K+</strong><span>Students</span></div>
            <div><strong>4.8★</strong><span>Rating</span></div>
            <div><strong>100%</strong><span>Job Focused</span></div>
          </div>
        </div>
      </div>

      <div className="cr-wrap">
        <div className="cr-layout">
          {/* Sidebar */}
          <aside className="cr-side">
            <div className="cr-side-block">
              <h2>Categories</h2>
              {CATS.map((cat) => (
                <label className="cr-filter" key={cat}>
                  <input type="checkbox" checked={filters.includes(cat)} onChange={() => toggle(cat)} />
                  <span className="cr-filter-label">{cat}</span>
                  <span className="cr-n">{COURSES.filter((c) => c.cat === cat).length}</span>
                </label>
              ))}
            </div>
            <div className="cr-side-cta">
              <p>Not sure which course?</p>
              <button onClick={() => onNavigate('contact')}>Get Free Guidance</button>
            </div>
          </aside>

          {/* Main */}
          <main>
            <div className="cr-top">
              <p>{list.length ? `Showing <strong>${list.length}</strong> courses` : 'No courses match'}</p>
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort courses">
                <option value="new">Newly published</option>
                <option value="az">Title A–Z</option>
              </select>
            </div>

            <div className="cr-grid">
              {list.length === 0 && <p className="cr-empty">{search.trim() ? `No courses found for "${search}"` : 'Clear a filter to see all courses.'}</p>}
              {list.map((c) => {
                const open = hovered === c.t
                return (
                  <article
                    key={c.t}
                    className={`cr-card${open ? ' open' : ''}`}
                    tabIndex={0}
                    onMouseEnter={() => setHovered(c.t)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(c.t)}
                    onBlur={() => setHovered(null)}
                  >
                    {!open && (
                      <div className="cr-img" dangerouslySetInnerHTML={{ __html: IMGS[c.img] }} />
                    )}
                    {!open && <span className="cr-tag">{c.cat}</span>}

                    <div className="cr-body">
                      <div className="cr-meta1">
                        <span className="cr-lvl">All levels</span>
                        <span className="cr-dur">⏱ {c.dur}</span>
                      </div>
                      <h3>{c.t}</h3>
                      <div className="cr-stats">
                        <span>{DOC}{c.l} Lessons</span>
                      </div>
                      {open && <p className="cr-skills">{c.skills}</p>}
                      {open && (
                        <button className="cr-btn" onClick={() => onNavigate('contact')}>Enquire Now →</button>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}


