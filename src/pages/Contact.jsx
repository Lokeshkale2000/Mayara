export default function Contact() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h2>Contact</h2>
          <form className="form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required />
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}
