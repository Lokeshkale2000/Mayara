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
    </main>
  )
}

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
        Top <span>IT &amp; AI Courses</span> in India
      </h2>

      <div className="tc-track" ref={track} onScroll={update}>
        {COURSES.map((c) => (
          <article className="tc-card" key={c.t}>
            <div className="tc-img" dangerouslySetInnerHTML={{ __html: IMGS[c.img] }} />
            <span className="tc-tag">{c.cat}</span>
            <div className="tc-body">
              <div className="tc-meta">
                <span className="tc-lvl">All levels</span>
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
  background: var(--fs-bg);
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
.tc-card { position: relative; flex: 0 0 calc((100% - 2 * 38px) / 3); scroll-snap-align: start; display: flex; flex-direction: column; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; overflow: hidden; }
.tc-img { height: 160px; flex: none; }
.tc-img svg { width: 100%; height: 100%; display: block; }
.tc-tag { position: absolute; top: 15px; right: 15px; background: #fff; color: #14213d; border-radius: 3px; padding: 3px 10px; font-size: 15px; }
.tc-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
.tc-meta { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
.tc-lvl { background: #f1f3f6; border-radius: 3px; padding: 4px 10px; font-size: 14px; }
.tc-card h3 { margin: 0 0 16px; font-size: 18px; line-height: 1.3; font-weight: 500; color: #111827; }
.tc-stats { display: flex; flex-wrap: wrap; gap: 10px 20px; margin-top: auto; color: #6b7280; font-size: 15px; }
.tc-stats span { display: flex; align-items: center; gap: 6px; }
.tc-controls { display: flex; align-items: center; gap: 12px; margin-top: 34px; }
.tc-arrow { flex: none; width: 60px; height: 60px; border: 0; border-radius: 50%; background: #eef0f4; color: #4b5563; display: grid; place-items: center; cursor: pointer; transition: background .15s, color .15s; }
.tc-arrow:hover:not(:disabled) { background: #0d8bf2; color: #fff; }
.tc-arrow:disabled { opacity: .45; cursor: default; }
.tc-progress { position: relative; flex: 1; height: 1px; margin: 0 14px; background: #d9dce3; }
.tc-progress span { position: absolute; top: -1px; height: 2px; background: #14213d; transition: left .1s linear; }
.tc-all { flex: none; font: inherit; font-size: 18px; font-weight: 400; padding: 14px 26px; border: 1px solid #14213d; border-radius: 5px; background: #fff; color: #14213d; cursor: pointer; transition: background .15s, color .15s; }
.tc-all:hover { background: #14213d; color: #fff; }
@media (max-width: 1100px) { .tc-card { flex-basis: calc((100% - 38px) / 2); } }
@media (max-width: 640px) { .tc-track { gap: 18px; } .tc-card { flex-basis: 86%; } .tc-body { padding: 20px; } .tc-arrow { width: 48px; height: 48px; } .tc-all { font-size: 15px; padding: 10px 14px; } }
@media (prefers-reduced-motion: reduce) { .tc-track { scroll-behavior: auto; } .tc-arrow, .tc-all, .tc-progress span { transition: none; } }
`
