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
      <style>{css}</style>

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
          <img src={image} alt={imageAlt} loading="lazy" />
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

const css = `
.ab {
  --ab-accent: #0b8bea;
  --ab-accent-dark: #0654a0;
  --ab-navy: #0b1d3f;
  --ab-ink: #14172b;
  --ab-muted: #5d6478;
  --ab-line: #e3e8f2;
  --ab-soft: #f2f6fd;
  --ab-radius: 22px;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) 24px clamp(48px, 7vw, 96px);
  color: var(--ab-ink);
  font-family: "Outfit", "Poppins", system-ui, -apple-system, "Segoe UI", sans-serif;
  box-sizing: border-box;
}
.ab *, .ab *::before, .ab *::after { box-sizing: inherit; }
.ab h1, .ab h2, .ab h3, .ab p, .ab ul { margin: 0; padding: 0; }
.ab ul { list-style: none; }

/* ---------- Hero ---------- */
.ab__hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(44px, 7vw, 96px) clamp(20px, 5vw, 72px);
  border-radius: 32px;
  text-align: center;
  background:
    radial-gradient(60% 80% at 12% 0%, rgba(11, 139, 234, .22), transparent 70%),
    radial-gradient(50% 70% at 95% 100%, rgba(99, 102, 241, .16), transparent 70%),
    var(--ab-soft);
  animation: ab-rise .7s ease both;
}
.ab__hero::before {
  /* faint dot grid for texture */
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: radial-gradient(rgba(11, 29, 63, .12) 1px, transparent 1px);
  background-size: 22px 22px;
  mask-image: radial-gradient(70% 70% at 50% 40%, #000, transparent);
  -webkit-mask-image: radial-gradient(70% 70% at 50% 40%, #000, transparent);
}
.ab__pill {
  display: inline-block;
  padding: 8px 18px;
  border: 1px solid rgba(11, 139, 234, .3);
  border-radius: 999px;
  background: #fff;
  color: var(--ab-accent-dark);
  font-size: 15px;
  font-weight: 500;
}
.ab__title {
  margin: 24px auto 22px;
  max-width: 17ch;
  font-size: clamp(38px, 6vw, 72px);
  line-height: 1.06;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.ab__title span {
  background: linear-gradient(100deg, #0b8bea, #5b5ff0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--ab-accent);
}
.ab__lead {
  max-width: 62ch;
  margin: 0 auto;
  color: var(--ab-muted);
  font-size: clamp(18px, 1.8vw, 22px);
  line-height: 1.65;
}
.ab__chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
}
.ab__chips li {
  padding: 9px 18px;
  border: 1px solid var(--ab-line);
  border-radius: 999px;
  background: #fff;
  font-size: 15.5px;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(11, 29, 63, .06);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  cursor: default;
}
.ab__chips li:hover {
  transform: translateY(-3px);
  border-color: var(--ab-accent);
  box-shadow: 0 6px 18px rgba(11,139,234,0.15);
}

/* ---------- Shared icon badge ---------- */
.ab__icon {
  display: inline-grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: linear-gradient(135deg, #dbeafe, #ede9fe);
  color: var(--ab-accent);
}
.ab__icon--light { background: rgba(255, 255, 255, .18); color: #fff; }

/* ---------- Intro cards ---------- */
.ab__intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
}
.ab__card {
  padding: clamp(26px, 3vw, 40px);
  border: 1px solid var(--ab-line);
  border-radius: var(--ab-radius);
  background: #fff;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.ab__card:hover {
  transform: translateY(-4px);
  border-color: rgba(11, 139, 234, .35);
  box-shadow: 0 18px 40px -18px rgba(11, 100, 200, .35);
}
.ab__card h2 { margin: 22px 0 12px; font-size: clamp(22px, 2.2vw, 27px); font-weight: 600; letter-spacing: -0.01em; }
.ab__card p { color: var(--ab-muted); font-size: 17.5px; line-height: 1.7; }

/* ---------- Banner ---------- */
.ab__banner {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin-top: 24px;
  padding: clamp(32px, 5vw, 64px) clamp(20px, 4vw, 56px);
  border-radius: 28px;
  background:
    radial-gradient(50% 90% at 85% 0%, rgba(11, 139, 234, .55), transparent 70%),
    linear-gradient(135deg, var(--ab-navy), #0a3470);
  color: #fff;
  text-align: center;
}
.ab__banner--photo { padding: 0; }
.ab__banner img { display: block; width: 100%; max-height: 520px; object-fit: cover; }
.ab__banner-text { margin-bottom: 28px; color: rgba(255, 255, 255, .75); font-size: 17px; }
.ab__pillars {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.ab__pillars::before {
  /* line that visually links the three pillars */
  content: "";
  position: absolute;
  top: 50%;
  left: 12%;
  right: 12%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .5), transparent);
  z-index: -1;
}
.ab__pillars li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 28px 16px;
  border: 1px solid rgba(255, 255, 255, .22);
  border-radius: 20px;
  background: rgba(255, 255, 255, .1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  font-size: clamp(19px, 2.4vw, 28px);
  font-weight: 600;
  letter-spacing: -0.01em;
}
.ab__pillar-icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  color: var(--ab-accent-dark);
}

/* ---------- Mission / Vision ---------- */
.ab__mv { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px; }
.ab__mv-card {
  padding: clamp(28px, 3.4vw, 48px);
  border: 1px solid var(--ab-line);
  border-radius: var(--ab-radius);
  background: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ab__mv-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px -18px rgba(11,100,200,0.25);
}
.ab__mv-card h2 { margin: 24px 0 14px; font-size: clamp(26px, 2.8vw, 34px); font-weight: 600; letter-spacing: -0.015em; }
.ab__mv-card p { color: var(--ab-muted); font-size: 18px; line-height: 1.75; }
.ab__mv-card--mission {
  border: 0;
  background: linear-gradient(135deg, #0b8bea 0%, #4f46e5 100%);
  box-shadow: 0 24px 48px -24px rgba(11, 100, 200, .6);
}
.ab__mv-card--mission p { color: rgba(255, 255, 255, .92); }
.ab__mv-card--mission h2 { color: #fff; }

/* ---------- Values ---------- */
.ab__values { margin-top: clamp(56px, 8vw, 104px); }
.ab__values-title {
  margin-bottom: 32px;
  text-align: center;
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.025em;
}
.ab__values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.ab__value {
  padding: 30px 28px 34px;
  border: 1px solid var(--ab-line);
  border-radius: var(--ab-radius);
  background: #fff;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.ab__value:hover {
  transform: translateY(-4px);
  border-color: rgba(11, 139, 234, .35);
  box-shadow: 0 18px 40px -18px rgba(11, 100, 200, .35);
}
.ab__value:hover .ab__icon { background: linear-gradient(135deg, #0b8bea, #6366f1); color: #fff; }
.ab__icon { transition: background-color .25s ease, color .25s ease; }
.ab__value h3 { margin: 20px 0 8px; font-size: 21px; font-weight: 600; }
.ab__value p { color: var(--ab-muted); font-size: 17px; line-height: 1.6; }

/* ---------- CTA ---------- */
.ab__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: clamp(48px, 7vw, 88px);
  padding: clamp(28px, 4vw, 52px);
  border-radius: 28px;
  background: linear-gradient(135deg, #f0f5ff 0%, #ede9fe 100%);
  border: 1px solid var(--ab-line);
}
.ab__cta h2 { max-width: 22ch; font-size: clamp(24px, 3vw, 36px); line-height: 1.2; font-weight: 600; letter-spacing: -0.02em; }
.ab__cta a {
  flex: none;
  padding: 16px 30px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0b8bea, #4f46e5);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity .25s ease, transform .25s ease, box-shadow .25s ease;
  box-shadow: 0 4px 14px rgba(11,139,234,0.3);
}
.ab__cta a:hover { opacity: 0.88; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(11,139,234,0.45); }
.ab__cta a:focus-visible { outline: 3px solid var(--ab-navy); outline-offset: 3px; }

@keyframes ab-rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}

/* ---------- Responsive ---------- */
@media (max-width: 960px) {
  .ab__values-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 700px) {
  .ab { padding-left: 16px; padding-right: 16px; }
  .ab__intro, .ab__mv, .ab__values-grid { grid-template-columns: 1fr; }
  .ab__pillars { grid-template-columns: 1fr; }
  .ab__pillars::before { display: none; }
  .ab__cta { flex-direction: column; align-items: flex-start; }
}
@media (prefers-reduced-motion: reduce) {
  .ab__hero { animation: none; }
  .ab *, .ab *::before, .ab *::after { transition: none !important; }
  .ab__card:hover, .ab__value:hover, .ab__cta a:hover { transform: none; }
}
`;