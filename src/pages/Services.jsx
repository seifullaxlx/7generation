import '../../public/styles/pages/services.css'

export default function Services() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">Services</h1>
          </div>
          <div className="block">
            <p className="block__body">A full spectrum of digital services built for impact at institutional scale.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Offerings</span>
            <h2 className="block__heading">What We Do</h2>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">Strategic Consulting</li>
              <li className="block__list-item">System Architecture & Engineering</li>
              <li className="block__list-item">Data Platform Development</li>
              <li className="block__list-item">ESG Compliance Automation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Process</span>
            <h2 className="block__heading">How We Work</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Engagement</span>
            <h2 className="block__heading">Start a Project</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>
    </>
  )
}
