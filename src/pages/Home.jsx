import './Home.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import HERO_IMAGE from '../assets/heroimg.png'
import { COURSES, IMGS } from './Courses'

/* ---------- Icons ---------- */
const IconStudents = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="9" width="38" height="26" rx="3" />
    <path d="M5 16h38" />
    <circle cx="10" cy="12.5" r="0.8" fill="currentColor" />
    <circle cx="14" cy="12.5" r="0.8" fill="currentColor" />
    <path d="M12 24h10M12 29h7" />
    <path d="M26 30l8-4 8 4-8 4-8-4z" fill="#fff" />
    <path d="M30 32.5v4c0 1.2 2 2.2 4 2.2s4-1 4-2.2v-4" fill="#fff" />
  </svg>
)

const IconCourses = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 5h20l8 8v13" />
    <path d="M10 5v38h14" />
    <path d="M30 5v8h8" />
    <path d="M16 18h10M16 24h16M16 30h8" />
    <path d="M36 32l6 2.5v5c0 3-3 5-6 6.5-3-1.5-6-3.5-6-6.5v-5L36 32z" fill="#fff" />
    <path d="M33.5 39l2 2 3.5-4" />
  </svg>
)

const IconInstructor = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="6" width="26" height="24" rx="3" />
    <path d="M12 12h14M12 18h8" />
    <circle cx="26" cy="23" r="5" fill="#fff" />
    <path d="M23.5 27l-1.5 8 4-2 4 2-1.5-8" fill="#fff" />
    <rect x="34" y="20" width="9" height="12" rx="2" />
    <path d="M38.5 32v4M34 40h9M38.5 36v4" />
  </svg>
)

const STRIP_ITEMS = [
  {
    id: 'students',
    icon: <IconStudents />,
    title: 'Students Enrolled',
    text: '50,000+ Learners From Mumbai to Delhi are building IT careers with us',
  },
  {
    id: 'courses',
    icon: <IconCourses />,
    title: 'Job-Ready IT & AI Courses',
    text: '15+ Python, AWS, DevOps, GenAI & more updated for 2026 job market',
  },
  {
    id: 'instructors',
    icon: <IconInstructor />,
    title: 'Instructor Industry Experience',
    text: 'Real-world expertise from 10+ years in enterprise IT, cloud & automation',
  },
]

export default function Home({ onNavigate = () => {} }) {
  return (
    <main>
      <section className="hm-hero">
        <div className="hm-wrap hm-grid">

          {/* Left: text */}
          <div className="hm-copy">
            <h1 className="hm-title">
              Train. Transform.<br />
              <span className="hm-blue">Get Placed.</span><br />
              <span className="hm-green">Build Technology.</span>
            </h1>

            <button className="hm-btn" onClick={() => onNavigate('courses')}>
              Explore All Courses
              <svg className="hm-btn-arrow" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>

          {/* Right: visual */}
          <div className="hm-visual">
            <span className="hm-square" aria-hidden="true" />
            <span className="hm-dots" aria-hidden="true" />
            <img className="hm-photo" src={HERO_IMAGE} alt="Learner studying online with headphones" loading="lazy" decoding="async" />
          </div>

        </div>
      </section>

      <TrustBar />

      <TopCourses onNavigate={onNavigate} />

      {/* Feature Strip */}
      <section className="fs-section" aria-label="Why learn with us">
        <ul className="fs-grid">
          {STRIP_ITEMS.map((item) => (
            <li key={item.id} className="fs-item">
              <span className="fs-icon">{item.icon}</span>
              <div className="fs-body">
                <h3 className="fs-title">{item.title}</h3>
                <span className="fs-rule" aria-hidden="true" />
                <p className="fs-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StudentResults />
    </main>
  )
}

/* ---------- TrustBar ---------- */
function TrustBar() {
  return (
    <div className="tb-wrap">
      <p className="tb-label">Skills that get you hired</p>
      <div className="tb-track" aria-hidden="true">
        <ul className="tb-list">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <li key={i} className="tb-item">
              <span className="tb-dot" style={{ background: item.color }} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const TRUST_ITEMS = [
  { name: 'Python', color: '#3b82f6' },
  { name: 'AWS Cloud', color: '#ff9900' },
  { name: 'DevOps', color: '#2fd37a' },
  { name: 'Java', color: '#f97316' },
  { name: 'SQL', color: '#a855f7' },
  { name: 'Software Testing', color: '#e5484d' },
  { name: 'Linux', color: '#ffb020' },
  { name: 'Docker', color: '#0d8bf2' },
  { name: 'Git & GitHub', color: '#27b21a' },
  { name: 'Kubernetes', color: '#326ce5' },
  { name: 'Terraform', color: '#7b42bc' },
  { name: 'CI/CD', color: '#0d8bf2' },
]



/* ---------- TopCourses ---------- */
const GRAD = (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#0d8bf2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 3 9 3 12 0v-5" />
  </svg>
)
const RDOC = (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#0d8bf2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
)
const ARROW = (dir) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === 'left' ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
  </svg>
)

function TopCourses({ onNavigate }) {
  const track = useRef(null)
  const [pos, setPos] = useState({ left: 0, width: 100, atStart: true, atEnd: false })

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setPos({
      left: (scrollLeft / scrollWidth) * 100,
      width: Math.min(100, (clientWidth / scrollWidth) * 100),
      atStart: scrollLeft <= 2,
      atEnd: scrollLeft + clientWidth >= scrollWidth - 2,
    })
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const scrollByCard = (dir) => {
    const el = track.current
    const card = el.querySelector('.tc-card')
    const step = card ? card.offsetWidth + 38 : el.clientWidth
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="tc-wrap" aria-labelledby="tc-heading">
      <p className="tc-eyebrow">Learn in-demand skills</p>
      <h2 id="tc-heading" className="tc-title">
        Top <span>IT &amp; Support Courses</span> in India
      </h2>

      <div className="tc-track" ref={track} onScroll={update}>
        {COURSES.map((c) => (
          <article className="tc-card" key={c.t}>
            <div className="tc-img" dangerouslySetInnerHTML={{ __html: IMGS[c.img] }} />
            <span className="tc-tag">{c.cat}</span>
            <div className="tc-body">
              <div className="tc-meta">
                <span className="tc-lvl">All levels</span>
                <span className="tc-dur">⏱ {c.dur}</span>
              </div>
              <h3>{c.t}</h3>
              <div className="tc-stats">
                <span>{RDOC}{c.l} Lessons</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="tc-controls">
        <button className="tc-arrow" onClick={() => scrollByCard(-1)} disabled={pos.atStart} aria-label="Previous courses">{ARROW('left')}</button>
        <button className="tc-arrow" onClick={() => scrollByCard(1)} disabled={pos.atEnd} aria-label="Next courses">{ARROW('right')}</button>
        <div className="tc-progress" aria-hidden="true">
          <span style={{ left: `${pos.left}%`, width: `${pos.width}%` }} />
        </div>
        <button className="tc-all" onClick={() => onNavigate('courses')}>View All Courses</button>
      </div>
    </section>
  )
}





/* ---------- StudentResults ---------- */

const STATS = [
  { value: '50K+', label: 'Student Enrolled', color: '#27b21a' },
  { value: '30K+', label: 'Class Completed', color: '#0d8bf2' },
  { value: '15+', label: 'Industry-Ready Courses', color: '#ffb020' },
  { value: '4.8*', label: 'Average Course Rating', color: '#a855f7' },
]

const TESTIMONIALS = [
  {
    name: 'Tejas Sharma',
    role: 'Software Developer, Pune',
    text: 'Before joining Skill-Up Career, I had zero coding knowledge. After completing the Python course, I built my first automation script and got a ₹4.5 LPA salary hike within 3 months.',
    rating: 0,
    tone: '#3b2a22',
  },
  {
    name: 'Falguni',
    role: 'Software Developer, Pune',
    text: '"I recommend Skill Up Career to anyone looking to learn and upskill...If you are in the job market, you might want to add a new skill or forge a new path."',
    rating: 5,
    tone: '#2e3a3f',
  },
  {
    name: 'Sayali',
    role: 'Software Developer, Pune',
    text: '"Skill Up Career courses are always interesting and informative. They bring the classroom right to you and send you on a journey to explore new ideas and offer interesting topics."',
    rating: 5,
    tone: '#5a1f1f',
  },
]

const initials = (name) =>
  name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()

const Star = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffb020" aria-hidden="true">
    <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5 7.5-.7z" />
  </svg>
)

function StudentResults() {
  return (
    <section className="sr-wrap" aria-labelledby="sr-heading">

      <ul className="sr-stats">
        {STATS.map((s) => (
          <li key={s.label} className="sr-stat">
            <strong style={{ color: s.color }}>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>

      <p className="sr-eyebrow">What our students say</p>
      <h2 id="sr-heading" className="sr-title">
        <span>Real Results</span> from Real Learners Across India
      </h2>

      <div className="sr-grid">
        {TESTIMONIALS.map((t) => (
          <figure className="sr-card" key={t.name}>
            <figcaption className="sr-head">
              {t.photo ? (
                <img src={t.photo} alt="" className="sr-avatar" loading="lazy" decoding="async" />
              ) : (
                <span className="sr-avatar" style={{ background: t.tone }} aria-hidden="true">
                  {initials(t.name)}
                </span>
              )}
              <div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            </figcaption>

            <blockquote className="sr-body">
              <p>{t.text}</p>
              {t.rating > 0 && (
                <div className="sr-stars" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }, (_, i) => <Star key={i} />)}
                </div>
              )}
            </blockquote>
          </figure>
        ))}
      </div>

      <p className="sr-trust">
        <span>Trusted</span>
        Join 50,000+ students across Amravati, Pune, Mumbai, Delhi, Bangalore, and beyond who are building IT careers with Skill-Up Career.
      </p>
    </section>
  )
}


