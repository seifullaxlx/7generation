import '../../public/styles/pages/portfolio.css'

export default function Portfolio() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">Portfolio</h1>
          </div>
          <div className="block">
            <p className="block__body">Selected projects where technology met real social and institutional need.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Selected Work</span>
            <h2 className="block__heading">Projects That Last</h2>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">01 — Arboreal / Reforestation Initiative</li>
              <li className="block__list-item">02 — Tide Mark / Ocean Data Platform</li>
              <li className="block__list-item">03 — Roots & Routes / Community Mobility</li>
              <li className="block__list-item">04 — SolarWeave / Textile Energy Harvest</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Sectors</span>
            <h2 className="block__heading">Where We've Worked</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Next</span>
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
