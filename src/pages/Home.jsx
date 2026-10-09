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
            <img className="hm-photo" src={HERO_IMAGE} alt="Learner studying online with headphones" />
          </div>

        </div>
      </section>

      <TrustBar />

      <TopCourses onNavigate={onNavigate} />

      {/* Feature Strip */}
      <section className="fs-section" aria-label="Why learn with us">
        <style>{fsCss}</style>
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
      <style>{tbCss}</style>
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

const tbCss = `
.tb-wrap {
  background: #f8f9fb;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 22px 0;
  overflow: hidden;
}
.tb-label {
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 16px;
}
.tb-track { overflow: hidden; }
.tb-list {
  display: flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: max-content;
  animation: tb-scroll 28s linear infinite;
}
.tb-list:hover { animation-play-state: paused; }
.tb-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  padding: 8px 20px;
  font-size: 15px;
  font-weight: 400;
  color: #374151;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: default;
}
.tb-item:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  border-color: #0d8bf2;
}
.tb-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex: none;
}
@keyframes tb-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .tb-list { animation: none; }
}
`

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
      <style>{tcCss}</style>
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

const fsCss = `
.fs-section {
  --fs-bg: #eff0f6;
  --fs-ink: #1a1a1f;
  --fs-muted: #6b6f7b;
  --fs-accent: #0b8cf0;
  --fs-divider: #dcdee8;
  background: linear-gradient(160deg, #eef1f8 0%, #e8edf8 100%);
  padding: 56px 24px;
}
.fs-grid {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 1240px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.fs-item {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 0 40px;
}
.fs-item + .fs-item { border-left: 1px solid var(--fs-divider); }
.fs-item:first-child { padding-left: 0; }
.fs-item:last-child { padding-right: 0; }
.fs-icon {
  flex: none;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #fff;
  color: var(--fs-accent);
  display: grid;
  place-items: center;
  transition: background 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.fs-item:hover .fs-icon {
  background: linear-gradient(135deg, #0b8cf0, #6366f1);
  color: #fff;
  transform: scale(1.1) rotate(-4deg);
  box-shadow: 0 8px 24px rgba(11,140,240,0.3);
}
.fs-title {
  margin: 0;
  font-size: 1.65rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--fs-ink);
}
.fs-rule {
  display: block;
  width: 50px;
  height: 2px;
  margin: 12px 0 10px;
  background: var(--fs-accent);
}
.fs-text {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.55;
  color: var(--fs-muted);
}
@media (max-width: 1024px) {
  .fs-item { padding: 0 24px; gap: 18px; }
  .fs-icon { width: 72px; height: 72px; }
  .fs-title { font-size: 1.3rem; }
  .fs-text { font-size: 1rem; }
}
@media (max-width: 768px) {
  .fs-section { padding: 40px 20px; }
  .fs-grid { grid-template-columns: 1fr; row-gap: 28px; }
  .fs-item,
  .fs-item:first-child,
  .fs-item:last-child { padding: 0; }
  .fs-item + .fs-item {
    border-left: 0;
    border-top: 1px solid var(--fs-divider);
    padding-top: 28px;
  }
}
`

const tcCss = `
.tc-wrap {
  max-width: 1240px;
  margin: 0 auto;
  padding: clamp(32px, 4.8vw, 64px) 20px;
  color: #14213d;
  box-sizing: border-box;
}
.tc-wrap *, .tc-wrap *::before, .tc-wrap *::after { box-sizing: inherit; }
.tc-eyebrow { text-align: center; margin: 0 0 11px; font-size: 15px; letter-spacing: .02em; text-transform: uppercase; color: #4b5563; }
.tc-title { text-align: center; margin: 0 0 clamp(26px, 4vw, 51px); font-size: clamp(24px, 3.5vw, 42px); font-weight: 600; line-height: 1.15; color: #111827; }
.tc-title span { color: #0d8bf2; }
.tc-track { display: flex; gap: 38px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding-bottom: 2px; }
.tc-track::-webkit-scrollbar { display: none; }
.tc-card { position: relative; flex: 0 0 calc((100% - 2 * 38px) / 3); scroll-snap-align: start; display: flex; flex-direction: column; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; overflow: hidden; transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease; }
.tc-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(13,139,242,0.13); border-color: #0d8bf2; }
.tc-img { height: 160px; flex: none; }
.tc-img svg { width: 100%; height: 100%; display: block; }
.tc-tag { position: absolute; top: 15px; right: 15px; background: #fff; color: #14213d; border-radius: 3px; padding: 3px 10px; font-size: 15px; }
.tc-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
.tc-meta { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
.tc-lvl { background: #f1f3f6; border-radius: 3px; padding: 4px 10px; font-size: 14px; }
.tc-dur { background: #fff4e5; color: #b45309; border-radius: 3px; padding: 4px 10px; font-size: 14px; font-weight: 500; }
.tc-card h3 { margin: 0 0 16px; font-size: 18px; line-height: 1.3; font-weight: 500; color: #111827; }
.tc-stats { display: flex; flex-wrap: wrap; gap: 10px 20px; margin-top: auto; color: #6b7280; font-size: 15px; }
.tc-stats span { display: flex; align-items: center; gap: 6px; }
.tc-controls { display: flex; align-items: center; gap: 12px; margin-top: 34px; }
.tc-arrow { flex: none; width: 60px; height: 60px; border: 0; border-radius: 50%; background: #eef0f4; color: #4b5563; display: grid; place-items: center; cursor: pointer; transition: background 0.22s, color 0.22s, transform 0.22s; }
.tc-arrow:hover:not(:disabled) { background: linear-gradient(135deg, #0b84f3, #6366f1); color: #fff; transform: scale(1.1); }
.tc-arrow:disabled { opacity: .45; cursor: default; }
.tc-progress { position: relative; flex: 1; height: 1px; margin: 0 14px; background: #d9dce3; }
.tc-progress span { position: absolute; top: -1px; height: 2px; background: #14213d; transition: left .1s linear; }
.tc-all { flex: none; font: inherit; font-size: 18px; font-weight: 400; padding: 14px 26px; border: 1px solid #14213d; border-radius: 5px; background: #fff; color: #14213d; cursor: pointer; transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s; }
.tc-all:hover { background: linear-gradient(135deg, #0f172a, #1e3a5f); color: #fff; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(20,33,61,0.22); }
@media (max-width: 1100px) { .tc-card { flex-basis: calc((100% - 38px) / 2); } }
@media (max-width: 640px) { .tc-track { gap: 18px; } .tc-card { flex-basis: 86%; } .tc-body { padding: 20px; } .tc-arrow { width: 48px; height: 48px; } .tc-all { font-size: 15px; padding: 10px 14px; } }
@media (prefers-reduced-motion: reduce) { .tc-track { scroll-behavior: auto; } .tc-arrow, .tc-all, .tc-progress span { transition: none; } }
`

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
    role: '1,2k Student',
    text: '"I recommend Skill Up Career to anyone looking to learn and upskill...If you are in the job market, you might want to add a new skill or forge a new path."',
    rating: 5,
    tone: '#2e3a3f',
  },
  {
    name: 'Sayali',
    role: '1,2k Student',
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
      <style>{srCss}</style>

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
                <img src={t.photo} alt="" className="sr-avatar" />
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

const srCss = `
.sr-wrap {
  max-width: 1240px;
  margin: 0 auto;
  padding: clamp(40px, 6vw, 80px) 20px;
  font: 300 17px/1.5 "Outfit", system-ui, sans-serif;
  color: #14213d;
  box-sizing: border-box;
}
.sr-wrap *, .sr-wrap *::before, .sr-wrap *::after { box-sizing: inherit; }

.sr-stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 38px;
}
.sr-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 26px 16px 30px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}
.sr-stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(13,139,242,0.12);
  border-color: #0d8bf2;
}
.sr-stat strong { font-size: clamp(34px, 4vw, 46px); font-weight: 600; line-height: 1.2; }
.sr-stat span { font-size: 22px; font-weight: 400; color: #111827; }

.sr-eyebrow {
  text-align: center;
  margin: clamp(56px, 8vw, 110px) 0 14px;
  font-size: 19px;
  text-transform: uppercase;
  letter-spacing: .02em;
  color: #4b5563;
}
.sr-title {
  text-align: center;
  margin: 0 0 clamp(36px, 6vw, 80px);
  font-size: clamp(28px, 4.2vw, 50px);
  font-weight: 600;
  line-height: 1.15;
  color: #111827;
}
.sr-title span { color: #0d8bf2; }

.sr-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px;
  align-items: start;
}
.sr-card {
  margin: 0;
  border-radius: 8px;
  background: #f0f1f7;
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}
.sr-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(20,33,61,0.12);
}
.sr-head {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 38px 38px 30px;
  border-bottom: 2px solid #fff;
}
.sr-head::after {
  content: "";
  position: absolute;
  left: calc(38px + 37px - 14px);
  bottom: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 12px solid #fff;
}
.sr-avatar {
  flex: none;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
}
.sr-head h3 { margin: 0; font-size: 24px; font-weight: 500; line-height: 1.25; color: #111827; }
.sr-head p { margin: 2px 0 0; font-size: 20px; color: #4b5563; }

.sr-body { margin: 0; padding: 36px 38px 38px; }
.sr-body p { margin: 0; font-size: 20px; line-height: 1.5; color: #4b5563; }
.sr-stars { display: flex; gap: 3px; margin-top: 22px; }

.sr-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin: 56px 0 0;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: #111827;
}
.sr-trust span {
  background: linear-gradient(135deg, #27b21a, #16a34a);
  color: #fff;
  border-radius: 999px;
  padding: 4px 22px;
  font-size: 18px;
}

@media (max-width: 1024px) {
  .sr-stats { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .sr-grid { grid-template-columns: 1fr; gap: 24px; }
}
@media (max-width: 560px) {
  .sr-head { padding: 28px 24px 22px; }
  .sr-head::after { left: calc(24px + 37px - 14px); }
  .sr-body { padding: 26px 24px 28px; }
  .sr-stat span { font-size: 18px; }
  .sr-body p { font-size: 18px; }
}
`
