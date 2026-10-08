import { useState } from "react";

const DEFAULT_INFO = {
  phone: "(+91) 98900-73789",
  address: "Pune",
  addressHref: "https://www.google.com/maps/search/502,+4th+Floor,+Dangat+Patil+Empire,+Kudale+Baug,+Vadgaon+Budruk,+Pune,+Maharashtra+411041/@18.4603799,73.8211911,17z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  email: "info@mayaratech.com",
};

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact({ info = DEFAULT_INFO, onSubmit }) {
  const [values, setValues] = useState({ name: "", email: "", question: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const change = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = "Enter your name.";
    if (!values.email.trim()) er.email = "Enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) er.email = "Enter a valid email address.";
    if (!values.question.trim()) er.question = "Enter your question.";
    return er;
  };

  const submit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    setStatus("sending");
    try {
      if (onSubmit) await onSubmit(values);
      setValues({ name: "", email: "", question: "" });
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <section className="ct" aria-labelledby="ct-title">
      <style>{css}</style>

      <header className="ct__head">
        <h1 id="ct-title" className="ct__title">
          Your perspective is invaluable to us.
          <br />
          We eagerly await your input.
        </h1>
      </header>

      <div className="ct__body">
        <div className="ct__info">
          <p className="ct__kicker">We're here to help!</p>
          <h2 className="ct__sub">Have a question or feedback? Let us know!</h2>
          <p className="ct__text">
            Our dedicated support team is available to assist you with any inquiries or
            concerns you may have. We strive to provide prompt and helpful assistance to
            ensure your learning experience with us is seamless and enjoyable.
          </p>

          <ul className="ct__list">
            <li>
              <span className="ct__badge"><PhoneIcon /></span>
              <div>
                <span className="ct__label">Call us directly?</span>
                <a className="ct__value" href={`tel:+919890073789`}>{info.phone}</a>
              </div>
            </li>
            <li>
              <span className="ct__badge"><PinIcon /></span>
              <div>
                <span className="ct__label">Address</span>
                <a className="ct__value" href={info.addressHref} target="_blank" rel="noopener noreferrer">{info.address}</a>
              </div>
            </li>
            <li>
              <span className="ct__badge"><MailIcon /></span>
              <div>
                <span className="ct__label">Email</span>
                <a className="ct__value" href={`mailto:${info.email}`}>{info.email}</a>
              </div>
            </li>
          </ul>
        </div>

        <form className="ct__form" onSubmit={submit} noValidate>
          <h3 className="ct__form-title">Get in touch</h3>

          <div className="ct__field">
            <label htmlFor="ct-name">Name *</label>
            <input id="ct-name" name="name" type="text" autoComplete="name"
              value={values.name} onChange={change}
              aria-invalid={!!errors.name} aria-describedby={errors.name ? "ct-name-err" : undefined} />
            {errors.name && <p className="ct__err" id="ct-name-err">{errors.name}</p>}
          </div>

          <div className="ct__field">
            <label htmlFor="ct-email">Email *</label>
            <input id="ct-email" name="email" type="email" autoComplete="email"
              value={values.email} onChange={change}
              aria-invalid={!!errors.email} aria-describedby={errors.email ? "ct-email-err" : undefined} />
            {errors.email && <p className="ct__err" id="ct-email-err">{errors.email}</p>}
          </div>

          <div className="ct__field">
            <label htmlFor="ct-question">Question *</label>
            <textarea id="ct-question" name="question" rows={5}
              value={values.question} onChange={change}
              aria-invalid={!!errors.question} aria-describedby={errors.question ? "ct-question-err" : undefined} />
            {errors.question && <p className="ct__err" id="ct-question-err">{errors.question}</p>}
          </div>

          <button className="ct__send" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          <p className="ct__status" role="status" aria-live="polite">
            {status === "sent" && "Thanks! Your message has been sent. We'll get back to you soon."}
            {status === "failed" && "Something went wrong and your message wasn't sent. Please try again or email us directly."}
          </p>
        </form>
      </div>
    </section>
  );
}

const css = `
.ct {
  --ct-accent: #0b8bea;
  --ct-ink: #14172b;
  --ct-muted: #5d6478;
  --ct-panel: #f1f2f8;
  --ct-error: #c62828;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) 24px clamp(48px, 7vw, 96px);
  color: var(--ct-ink);
  font-family: "Outfit", "Poppins", system-ui, -apple-system, "Segoe UI", sans-serif;
  box-sizing: border-box;
}
.ct *, .ct *::before, .ct *::after { box-sizing: inherit; }

.ct__head { text-align: center; margin-bottom: clamp(40px, 6vw, 72px); }
.ct__eyebrow { margin: 0 0 20px; color: var(--ct-muted); font-size: 16px; }
.ct__title {
  margin: 0;
  font-size: clamp(30px, 5vw, 58px);
  line-height: 1.18;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.ct__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.ct__kicker { margin: 0 0 14px; font-size: 18px; font-weight: 500; }
.ct__sub {
  margin: 0 0 28px;
  font-size: clamp(28px, 3.4vw, 42px);
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.015em;
}
.ct__text { margin: 0 0 36px; max-width: 56ch; color: var(--ct-muted); font-size: 18px; line-height: 1.7; }

.ct__list { list-style: none; margin: 0; padding: 0; display: grid; gap: 22px; }
.ct__list li { display: flex; align-items: center; gap: 18px; }
.ct__badge {
  flex: none;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--ct-panel);
  color: var(--ct-accent);
}
.ct__label { display: block; color: var(--ct-muted); font-size: 18px; }
.ct__value { display: block; color: var(--ct-ink); font-size: 18px; font-weight: 500; text-decoration: none; }
a.ct__value:hover { color: var(--ct-accent); }

.ct__form { padding: clamp(18px, 2.25vw, 28.5px); border-radius: 14px; background: var(--ct-panel); }
.ct__form-title { margin: 0 0 21px; font-size: 16.5px; font-weight: 500; }

.ct__field { margin-bottom: 15px; }
.ct__field label { display: block; margin-bottom: 6px; color: var(--ct-muted); font-size: 12px; }
.ct__field input, .ct__field textarea {
  display: block;
  width: 100%;
  padding: 12px 13.5px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: #fff;
  color: var(--ct-ink);
  font: inherit;
  font-size: 12.75px;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.ct__field textarea { resize: vertical; min-height: 97.5px; }
.ct__field input:focus, .ct__field textarea:focus {
  outline: none;
  border-color: var(--ct-accent);
  box-shadow: 0 0 0 3px rgba(11, 139, 234, .2);
}
.ct__field [aria-invalid="true"] { border-color: var(--ct-error); }
.ct__err { margin: 6px 0 0; color: var(--ct-error); font-size: 15px; }

.ct__send {
  padding: 16px 30px;
  border: 0;
  border-radius: 8px;
  background: var(--ct-accent);
  color: #fff;
  font: inherit;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color .2s ease;
}
.ct__send:hover:not(:disabled) { background: #0877c8; }
.ct__send:disabled { opacity: .65; cursor: progress; }
.ct__send:focus-visible { outline: 3px solid var(--ct-ink); outline-offset: 3px; }
.ct__status { min-height: 1.4em; margin: 16px 0 0; color: var(--ct-muted); font-size: 16px; }

@media (max-width: 860px) {
  .ct__body { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .ct *, .ct *::before, .ct *::after { transition: none !important; }
}
`;
