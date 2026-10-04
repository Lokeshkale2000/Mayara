import { Link } from '../router'

export default function NotFound() {
  return (
    <main>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '6rem' }}>404</h2>
          <p>Page not found.</p>
          <Link to="/" className="btn" style={{ marginTop: '2em', display: 'inline-block' }}>
            Go Home
          </Link>
        </div>
      </section>
    </main>
  )
}
