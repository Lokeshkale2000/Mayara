import './Services.css'

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


