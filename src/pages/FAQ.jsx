import { useState } from "react";

const FAQS = [
  {
    q: "What training programs do you offer?",
    a: "We offer job-oriented training programs in Application Support, SQL Development, Java Development, Software Testing, DevOps, and AWS Cloud.",
  },
  {
    q: "Are the courses suitable for freshers?",
    a: "Yes. Our programs are designed for both freshers and professionals looking to upgrade their technical skills.",
  },
  {
    q: "Do you provide practical training?",
    a: "Yes. Training includes practical exercises, real-world scenarios, projects, and hands-on technical exposure.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes. We provide placement assistance, interview preparation, resume guidance, and connect eligible candidates with relevant job opportunities.",
  },
  {
    q: "Do you provide corporate hiring solutions?",
    a: "Yes. We help organizations identify and hire trained IT professionals based on their technical requirements.",
  },
  {
    q: "Can working professionals join the courses?",
    a: "Yes. Selected programs can be designed to suit working professionals and their schedules.",
  },
  {
    q: "What technologies do you cover?",
    a: "Our programs cover technologies including SQL, Java, Linux, AWS, DevOps tools, testing frameworks, monitoring and application-support technologies.",
  },
  {
    q: "Do you provide certification?",
    a: "Certification details depend on the individual training program. Please contact us for course-specific information.",
  },
  {
    q: "Do you provide online training?",
    a: "Yes, online training options can be provided depending on the program.",
  },
  {
    q: "Do you provide IT services to companies?",
    a: "Yes. Our long-term technology services roadmap includes DBA Services, Cloud Solutions, Database Performance Tuning, Application Support, DevOps and Managed IT Services.",
  },
  {
    q: "How can I contact you?",
    a: "You can contact our team through the phone number, email address, or contact form provided on our website.",
  },
];

export default function FAQ({ items = FAQS, contactHref = "/contact", defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <style>{css}</style>

      <div className="faq__intro">
        <h2 id="faq-title" className="faq__title">
          Frequently Asked Questions
        </h2>
        <p className="faq__lead">
          Quick answers about our courses, placements and IT services.
        </p>
        <a className="faq__cta" href={contactHref}>
          Still have a question? Contact us
        </a>
      </div>

      <div className="faq__list">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq__item${isOpen ? " is-open" : ""}`} key={item.q}>
              <h3 className="faq__heading">
                <button
                  type="button"
                  className="faq__q"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{i + 1}. {item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                className="faq__panel"
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
              >
                <div className="faq__panel-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const css = `
.faq {
  --faq-accent: #0b8bea;
  --faq-ink: #0f1b3d;
  --faq-muted: #5d6478;
  --faq-line: #e3e6ee;
  --faq-soft: #f1f2f8;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 8fr);
  gap: clamp(32px, 6vw, 88px);
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) 24px clamp(48px, 7vw, 96px);
  color: var(--faq-ink);
  font-family: "Outfit", "Poppins", system-ui, -apple-system, "Segoe UI", sans-serif;
  box-sizing: border-box;
}
.faq *, .faq *::before, .faq *::after { box-sizing: inherit; }

.faq__intro { align-self: start; position: sticky; top: 32px; }
.faq__eyebrow { margin: 0 0 12px; color: var(--faq-muted); font-size: 15px; }
.faq__title {
  margin: 0 0 16px;
  font-size: clamp(32px, 4.4vw, 52px);
  line-height: 1.08;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.faq__lead { margin: 0 0 28px; max-width: 34ch; color: var(--faq-muted); font-size: 17px; line-height: 1.6; }
.faq__cta {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 10px;
  background: var(--faq-accent);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color .2s ease;
}
.faq__cta:hover { background: #0877c8; }

.faq__list { border-top: 1px solid var(--faq-line); }
.faq__item { border-bottom: 1px solid var(--faq-line); }
.faq__heading { margin: 0; font-size: inherit; font-weight: inherit; }

.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 24px 0;
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  font-size: clamp(17px, 1.6vw, 19px);
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}
.faq__q:hover { color: var(--faq-accent); }
.faq__q:focus-visible { outline: 3px solid var(--faq-accent); outline-offset: 2px; border-radius: 6px; }

.faq__icon { position: relative; flex: none; width: 18px; height: 18px; }
.faq__icon::before, .faq__icon::after {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  height: 2px;
  margin-top: -1px;
  background: currentColor;
  transition: transform .25s ease;
}
.faq__icon::after { transform: rotate(90deg); }
.is-open .faq__icon::after { transform: rotate(0deg); }

.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .3s ease;
}
.is-open .faq__panel { grid-template-rows: 1fr; }
.faq__panel-inner { overflow: hidden; }
.faq__panel-inner p {
  margin: 0;
  padding: 0 40px 28px 0;
  max-width: 62ch;
  color: var(--faq-muted);
  font-size: 17px;
  line-height: 1.7;
}

@media (max-width: 860px) {
  .faq { grid-template-columns: 1fr; }
  .faq__intro { position: static; }
}
@media (prefers-reduced-motion: reduce) {
  .faq__panel, .faq__icon::before, .faq__icon::after { transition: none; }
}
`;
