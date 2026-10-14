import './Blog.css'

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


