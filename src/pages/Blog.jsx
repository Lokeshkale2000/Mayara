const POSTS = [
  {
    tag: 'Career',
    title: 'How to Land Your First IT Job in India (2025 Guide)',
    excerpt: 'A step-by-step roadmap covering skills, certifications, resume tips, and interview strategies for freshers entering the IT industry.',
    date: 'Jun 12, 2025',
    read: '5 min read',
  },
  {
    tag: 'DevOps',
    title: 'Docker vs Kubernetes: What Should You Learn First?',
    excerpt: 'We break down the differences, use cases, and the ideal learning order for aspiring DevOps engineers in 2025.',
    date: 'May 28, 2025',
    read: '4 min read',
  },
  {
    tag: 'Cloud',
    title: 'Top 5 AWS Services Every IT Professional Should Know',
    excerpt: 'From EC2 to CloudWatch — a practical overview of the AWS services that appear most in real-world job descriptions.',
    date: 'May 10, 2025',
    read: '6 min read',
  },
  {
    tag: 'SQL',
    title: 'SQL Performance Tuning: 7 Tips That Actually Work',
    excerpt: 'Indexing strategies, query rewrites, and execution plan analysis — practical techniques used by senior DBAs every day.',
    date: 'Apr 22, 2025',
    read: '7 min read',
  },
  {
    tag: 'Testing',
    title: 'Manual vs Automation Testing: Which Path Is Right for You?',
    excerpt: 'Understand the career trajectories, salary differences, and skill requirements for both testing tracks.',
    date: 'Apr 5, 2025',
    read: '5 min read',
  },
  {
    tag: 'Java',
    title: 'Spring Boot in 2025: Is It Still Worth Learning?',
    excerpt: 'An honest look at Spring Boot\'s relevance, job market demand, and how it compares to newer frameworks.',
    date: 'Mar 18, 2025',
    read: '4 min read',
  },
]

const TAG_COLORS = {
  Career: '#27b21a',
  DevOps: '#2fd37a',
  Cloud: '#ff9900',
  SQL: '#a855f7',
  Testing: '#e5484d',
  Java: '#f97316',
}

export default function Blog() {
  return (
    <section className="bl" aria-labelledby="bl-title">
      <style>{css}</style>

      <header className="bl__head">
        <p className="bl__eyebrow">Insights &amp; Guides</p>
        <h1 id="bl-title" className="bl__title">
          The <span>Skill-Up</span> Blog
        </h1>
        <p className="bl__lead">
          Practical articles on IT careers, cloud, DevOps, SQL, Java and more — written for learners and professionals.
        </p>
      </header>

      <div className="bl__grid">
        {POSTS.map((p) => (
          <article className="bl__card" key={p.title}>
            <div className="bl__card-top">
              <span className="bl__tag" style={{ background: TAG_COLORS[p.tag] + '18', color: TAG_COLORS[p.tag], borderColor: TAG_COLORS[p.tag] + '40' }}>
                {p.tag}
              </span>
              <span className="bl__meta">{p.date} · {p.read}</span>
            </div>
            <h2 className="bl__card-title">{p.title}</h2>
            <p className="bl__card-excerpt">{p.excerpt}</p>
            <span className="bl__read-more">
              Read article
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

const css = `
.bl {
  --bl-accent: #0b8bea;
  --bl-ink: #14172b;
  --bl-muted: #5d6478;
  --bl-line: #e3e6ee;
  --bl-soft: #f2f6fd;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) 24px clamp(48px, 7vw, 96px);
  font-family: "Outfit", system-ui, sans-serif;
  color: var(--bl-ink);
  box-sizing: border-box;
}
.bl *, .bl *::before, .bl *::after { box-sizing: inherit; }

.bl__head { text-align: center; margin-bottom: clamp(40px, 6vw, 72px); }
.bl__eyebrow {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--bl-muted);
}
.bl__title {
  margin: 0 0 18px;
  font-size: clamp(34px, 5vw, 62px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
}
.bl__title span {
  background: linear-gradient(90deg, #0b8bea, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bl__lead {
  margin: 0 auto;
  max-width: 54ch;
  color: var(--bl-muted);
  font-size: clamp(17px, 1.8vw, 20px);
  line-height: 1.65;
}

.bl__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.bl__card {
  display: flex;
  flex-direction: column;
  padding: 30px 28px 26px;
  border: 1px solid var(--bl-line);
  border-radius: 16px;
  background: linear-gradient(160deg, #ffffff 60%, #f5f7ff 100%);
  cursor: pointer;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}
.bl__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(11,139,234,0.12);
  border-color: var(--bl-accent);
}

.bl__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}
.bl__tag {
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid;
  font-size: 13px;
  font-weight: 600;
}
.bl__meta { font-size: 13px; color: var(--bl-muted); white-space: nowrap; }

.bl__card-title {
  margin: 0 0 12px;
  font-size: clamp(17px, 1.6vw, 20px);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.bl__card-excerpt {
  margin: 0 0 24px;
  color: var(--bl-muted);
  font-size: 15.5px;
  line-height: 1.65;
  flex: 1;
}

.bl__read-more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
  background: linear-gradient(90deg, #0b8bea, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: auto;
  transition: gap 0.2s ease;
}
.bl__card:hover .bl__read-more { gap: 10px; }

@media (max-width: 960px) { .bl__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .bl__grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) {
  .bl__card { transition: none; }
  .bl__read-more { transition: none; }
}
`
