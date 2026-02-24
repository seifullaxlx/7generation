import '../../public/styles/pages/about.css'

export default function About() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">About</h1>
          </div>
          <div className="block">
            <p className="block__body">Our mission, values and the principles that define how we work.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Mission</span>
            <h2 className="block__heading">Why We Exist</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Core Values</span>
            <h2 className="block__heading">What Guides Us</h2>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">Sustainability over short-term gain</li>
              <li className="block__list-item">Radical transparency</li>
              <li className="block__list-item">Long-term systems thinking</li>
              <li className="block__list-item">Community before corporation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">History</span>
            <h2 className="block__heading">Where We Come From</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>
    </>
  )
}
