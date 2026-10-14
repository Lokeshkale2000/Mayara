import './FAQ.css'
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


