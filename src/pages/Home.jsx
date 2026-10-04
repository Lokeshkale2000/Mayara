import './Home.css'

const HERO_IMAGE = '/hero-learner.jpg' // put your image in /public, or import it

export default function Home({ onNavigate = () => {} }) {
  return (
    <main>
      <section className="hm-hero">
        <div className="hm-wrap hm-grid">

          {/* Left: text */}
          <div className="hm-copy">
            <p className="hm-eyebrow">
              Trusted by 50,000+ learners across India. Courses start from ₹0.
            </p>

            <h1 className="hm-title">
              India&apos;s Most <span className="hm-blue">Affordable</span>
              <br />
              <span className="hm-blue">IT &amp; AI</span>{' '}
              <span className="hm-green">Online</span> Courses
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
    </main>
  )
}