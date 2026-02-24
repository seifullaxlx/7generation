import '../../public/styles/pages/contact.css'

export default function Contact() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">Contact</h1>
          </div>
          <div className="block">
            <p className="block__body">Let's build something that lasts. Reach out to start the conversation.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Get in Touch</span>
            <h2 className="block__heading">We'd Love to Hear From You</h2>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">hello@7generation.studio</li>
              <li className="block__list-item">+1 (000) 000 0000</li>
              <li className="block__list-item">Studio 4B, 120 Regenerative Lane, New York</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Follow</span>
            <h2 className="block__heading">Find Us Online</h2>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">Instagram</li>
              <li className="block__list-item">LinkedIn</li>
              <li className="block__list-item">Twitter / X</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Press</span>
            <h2 className="block__heading">Media Enquiries</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>
    </>
  )
}
