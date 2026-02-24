import '../../public/styles/pages/team.css'

export default function Team() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">Team</h1>
          </div>
          <div className="block">
            <p className="block__body">The people who design, build and maintain systems for the long run.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Core Team</span>
            <h2 className="block__heading">Driven by Shared Purpose</h2>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">Aiko Nakamura — Co-founder & Strategy</li>
              <li className="block__list-item">Carlos Ríos — Co-founder & Design</li>
              <li className="block__list-item">Priya Mehta — Sustainability Lead</li>
              <li className="block__list-item">Dmitri Volkov — Technology Director</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Culture</span>
            <h2 className="block__heading">How We Work Together</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Join Us</span>
            <h2 className="block__heading">Open Positions</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>
    </>
  )
}
