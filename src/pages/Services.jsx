import Card from '../components/Card'

const SERVICES = [
  { title: 'Design', description: 'Beautiful, user-centered design tailored to your brand.' },
  { title: 'Development', description: 'Scalable, performant web apps built with modern tech.' },
  { title: 'Support', description: 'Ongoing maintenance to keep your product running smoothly.' },
]

export default function Services() {
  return (
    <main>
      <section className="section section-alt">
        <div className="container">
          <h2>Services</h2>
          <div className="grid">
            {SERVICES.map((s) => <Card key={s.title} title={s.title} description={s.description} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
