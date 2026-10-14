import './About.css'

const INTRO = [
  "We are an IT training and technology solutions company focused on building skilled, job-ready IT professionals and delivering reliable technology solutions to businesses.",
  "Our training programs are designed to provide practical, industry-oriented knowledge in Application Support, SQL Development, Java Development, Software Testing, DevOps, and AWS Cloud. We focus on hands-on learning, real-world scenarios, technical skills, interview preparation, and placement assistance.",
  "Along with developing IT talent, our long-term vision is to become a trusted technology partner for organizations by providing specialized services in Database Administration (DBA), Database Performance Tuning, Cloud Solutions, DevOps, Application Support, and Managed IT Services.",
];

const PROGRAMS = [
  "Application Support",
  "SQL Development",
  "Java Development",
  "Software Testing",
  "DevOps",
  "AWS Cloud",
];

const MISSION =
  "To bridge the gap between IT skills and industry requirements by providing practical training, developing talented professionals, and delivering dependable technology solutions to businesses.";

const VISION =
  "To build a strong IT ecosystem that connects Talent, Training, and Technology Solutions, while becoming a trusted partner for organizations across India and beyond.";

const VALUES = [
  { icon: "code", title: "Practical Learning", text: "Industry-focused and hands-on training." },
  { icon: "user", title: "Quality Talent", text: "Developing technically strong and job-ready professionals." },
  { icon: "growth", title: "Career Growth", text: "Supporting candidates throughout their career journey." },
  { icon: "spark", title: "Technology Excellence", text: "Building expertise in modern IT technologies." },
  { icon: "briefcase", title: "Business Solutions", text: "Helping organizations solve technology and resource challenges." },
  { icon: "handshake", title: "Long-Term Partnership", text: "Creating lasting relationships with candidates and organizations." },
];

const PILLARS = [
  { icon: "user", label: "Talent" },
  { icon: "book", label: "Training" },
  { icon: "cloud", label: "Technology Solutions" },
];

/* One small icon set, all drawn on a 24x24 grid with the same stroke. */
const PATHS = {
  code: <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m13.5 5-3 14" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></>,
  growth: <><path d="M3 17 9 11l4 4 8-8" /><path d="M15 7h6v6" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  handshake: <><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" /><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.8-3.8a2.8 2.8 0 0 0-4 0L10 12a1.4 1.4 0 0 1-2-2l2.6-2.6a4.3 4.3 0 0 1 4.8-.9l1.8.8H20" /><path d="M3 4h2l6 5M3 14l5 5" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M4 19a2 2 0 0 0 2 2h13" /></>,
  cloud: <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 0 9.5H7Z" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
};

function Icon({ name, size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

/**
 * Props
 *  - image:      optional banner photo URL (replaces the pillar banner)
 *  - imageAlt:   alt text for the photo
 *  - brand:      company name
 *  - ctaHref:    where the bottom button goes
 */
export default function About({
  image,
  imageAlt = "MayaraTech training",
  brand = "MayaraTech",
  ctaHref = "/contact",
}) {
  return (
    <section className="ab" aria-labelledby="ab-title">

      {/* ---------- Hero ---------- */}
      <header className="ab__hero">
        <h1 id="ab-title" className="ab__title">
          Skilled people. <span>Reliable technology.</span> One partner.
        </h1>
        <p className="ab__lead">{INTRO[0]}</p>
        <ul className="ab__chips" aria-label="Training programs">
          {PROGRAMS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </header>

      {/* ---------- Intro cards ---------- */}
      <div className="ab__intro">
        <article className="ab__card">
          <span className="ab__icon"><Icon name="book" /></span>
          <h2>Training that gets you hired</h2>
          <p>{INTRO[1]}</p>
        </article>
        <article className="ab__card">
          <span className="ab__icon"><Icon name="cloud" /></span>
          <h2>A technology partner for business</h2>
          <p>{INTRO[2]}</p>
        </article>
      </div>

      {/* ---------- Banner ---------- */}
      <div className={`ab__banner${image ? " ab__banner--photo" : ""}`}>
        {image ? (
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
        ) : (
          <>
            <p className="ab__banner-text">The ecosystem we are building</p>
            <ul className="ab__pillars">
              {PILLARS.map((p) => (
                <li key={p.label}>
                  <span className="ab__pillar-icon"><Icon name={p.icon} size={28} /></span>
                  {p.label}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* ---------- Mission / Vision ---------- */}
      <div className="ab__mv">
        <article className="ab__mv-card ab__mv-card--mission">
          <span className="ab__icon ab__icon--light"><Icon name="target" /></span>
          <h2>Our Mission</h2>
          <p>{MISSION}</p>
        </article>
        <article className="ab__mv-card">
          <span className="ab__icon"><Icon name="eye" /></span>
          <h2>Our Vision</h2>
          <p>{VISION}</p>
        </article>
      </div>

      {/* ---------- Values ---------- */}
      <div className="ab__values">
        <h2 className="ab__values-title">What we stand for</h2>
        <ul className="ab__values-grid">
          {VALUES.map((v) => (
            <li key={v.title} className="ab__value">
              <span className="ab__icon"><Icon name={v.icon} /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- Call to action ---------- */}
      <div className="ab__cta">
        <h2>Ready to build your IT career or your team?</h2>
        <a href={ctaHref}>Talk to our team</a>
      </div>
    </section>
  );
}

