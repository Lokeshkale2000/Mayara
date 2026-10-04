import Card from '../components/Card'

const FAQS = [
  { title: 'What services do you offer?', description: 'We offer design, development and support services.' },
  { title: 'How can I get started?', description: 'Simply contact us and we will guide you through the process.' },
  { title: 'What is your turnaround time?', description: 'Depends on scope, typically 2–6 weeks.' },
]

export default function FAQ() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h2>FAQs</h2>
          <div className="grid">
            {FAQS.map((f) => <Card key={f.title} title={f.title} description={f.description} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
