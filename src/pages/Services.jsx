const STAGE1 = [
  { step: '01', label: 'Train',                desc: 'Job-oriented IT training programs with hands-on, practical exposure.' },
  { step: '02', label: 'Assess',               desc: 'Evaluate technical skills and readiness through structured assessments.' },
  { step: '03', label: 'Prepare',              desc: 'Interview preparation, resume guidance, and soft-skills coaching.' },
  { step: '04', label: 'Connect with Companies', desc: 'Bridge candidates with relevant hiring organizations.' },
  { step: '05', label: 'Placement',            desc: 'End-to-end placement assistance until the candidate is placed.' },
]

const STAGE2 = [
  { label: 'DBA Services',                desc: 'Database administration, backup, recovery, and health monitoring.' },
  { label: 'Database Performance Tuning', desc: 'Query optimization, indexing strategies, and performance diagnostics.' },
  { label: 'Cloud Services',              desc: 'AWS cloud setup, migration, architecture, and cost optimization.' },
  { label: 'Application Support',         desc: 'L1/L2/L3 support, incident management, and production monitoring.' },
  { label: 'DevOps',                      desc: 'CI/CD pipelines, Docker, Kubernetes, and infrastructure automation.' },
  { label: 'Managed IT Services',         desc: 'End-to-end IT management so your team can focus on the business.' },
]

export default function Services() {
  return (
    <section className="sv" aria-labelledby="sv-title">
      <style>{css}</style>

      <header className="sv__head">
        <h1 id="sv-title" className="sv__title">Our Business Model</h1>
        <p className="sv__lead">Two focused stages — building talent and delivering technology.</p>
      </header>

      {/* Stage 1 */}
      <div className="sv__stage">
        <div className="sv__stage-label">
          <span className="sv__badge">Stage 1</span>
          <h2>Training &amp; Placement</h2>
        </div>
        <div className="sv__flow">
          {STAGE1.map((item, i) => (
            <div className="sv__flow-item" key={item.label}>
              <div className="sv__flow-card">
                <span className="sv__step">{item.step}</span>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
              {i < STAGE1.length - 1 && <span className="sv__arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Stage 2 */}
      <div className="sv__stage sv__stage--dark">
        <div className="sv__stage-label">
          <span className="sv__badge sv__badge--light">Stage 2</span>
          <h2>Corporate IT Services</h2>
        </div>
        <div className="sv__grid">
          {STAGE2.map((item) => (
            <div className="sv__card" key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

const css = `
.sv {
  --sv-blue: #0b84f3;
  --sv-blue-dark: #0a6ccb;
  --sv-ink: #14172b;
  --sv-muted: #5d6478;
  --sv-line: #e3e6ee;
  --sv-soft: #f2f6fd;
  --sv-navy: #0b1d3f;
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) 24px clamp(48px, 7vw, 96px);
  font-family: "Outfit", "Poppins", system-ui, sans-serif;
  color: var(--sv-ink);
  box-sizing: border-box;
}
.sv *, .sv *::before, .sv *::after { box-sizing: inherit; }
.sv h1, .sv h2, .sv h3, .sv p { margin: 0; }

.sv__head { text-align: center; margin-bottom: clamp(40px, 6vw, 72px); }
.sv__title {
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}
.sv__lead { color: var(--sv-muted); font-size: 18px; }

/* Stage wrapper */
.sv__stage {
  padding: clamp(32px, 4vw, 56px);
  border-radius: 24px;
  background: var(--sv-soft);
  margin-bottom: 28px;
}
.sv__stage--dark {
  background: var(--sv-navy);
  color: #fff;
}

.sv__stage-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;
}
.sv__stage-label h2 {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 600;
  letter-spacing: -0.015em;
}
.sv__stage--dark .sv__stage-label h2 { color: #fff; }

.sv__badge {
  flex: none;
  padding: 6px 16px;
  border-radius: 999px;
  background: var(--sv-blue);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}
.sv__badge--light {
  background: rgba(255,255,255,0.15);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
}

/* Flow (Stage 1) */
.sv__flow {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
}
.sv__flow-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
  min-width: 140px;
}
.sv__flow-card {
  flex: 1;
  padding: 24px 20px;
  background: #fff;
  border: 1px solid var(--sv-line);
  border-radius: 14px;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.sv__flow-card:hover {
  border-color: var(--sv-blue);
  box-shadow: 0 8px 24px rgba(11,132,243,0.12);
}
.sv__step {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  color: var(--sv-blue);
  letter-spacing: 0.05em;
}
.sv__flow-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
.sv__flow-card p { font-size: 14px; color: var(--sv-muted); line-height: 1.6; }

.sv__arrow {
  flex: none;
  font-size: 22px;
  color: var(--sv-blue);
  margin-top: 36px;
  opacity: 0.6;
}

/* Grid (Stage 2) */
.sv__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sv__card {
  padding: 28px 24px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  background: rgba(255,255,255,0.06);
  transition: background 0.2s, border-color 0.2s;
}
.sv__card:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.3);
}
.sv__card h3 { font-size: 17px; font-weight: 600; color: #fff; margin-bottom: 10px; }
.sv__card p { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.65; }

@media (max-width: 900px) {
  .sv__grid { grid-template-columns: repeat(2, 1fr); }
  .sv__flow { flex-direction: column; }
  .sv__arrow { transform: rotate(90deg); margin: 0 auto; }
  .sv__flow-item { flex-direction: column; align-items: center; width: 100%; }
  .sv__flow-card { width: 100%; }
}
@media (max-width: 560px) {
  .sv__grid { grid-template-columns: 1fr; }
  .sv__stage { padding: 24px 20px; }
}
`
