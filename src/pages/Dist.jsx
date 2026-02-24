import '../../public/styles/pages/dist.css'

export default function Dist() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">DIST</h1>
          </div>
          <div className="block">
            <p className="block__body">Digital Infrastructure Stack — the core platform powering 7Generation solutions.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Overview</span>
            <h2 className="block__heading">What Is DIST</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Architecture</span>
            <h2 className="block__heading">How It Works</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Integration</span>
            <h2 className="block__heading">Deploy in Your Stack</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>
    </>
  )
}
