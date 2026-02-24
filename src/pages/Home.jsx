import '../../public/styles/pages/home.css'

export default function Home() {
  return (
    <>
      <section className="page section--hero page--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">ESG & Public Safety Projects</h1>
          </div>
          <div className="block">
            <p className="block__body">
              7Generation is a technology company that designs complex digital
              systems for business and public-sector institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Who We Are</span>
            <h2 className="block__heading">Technology That Serves Society</h2>
          </div>
          <div className="block">
            <p className="block__body">
              We combine deep domain expertise in ESG compliance, public safety
              infrastructure, and enterprise analytics to deliver systems that
              work at scale.
            </p>
            <ul className="block__list">
              <li className="block__list-item">ESG Reporting & Compliance</li>
              <li className="block__list-item">Public Safety Platforms</li>
              <li className="block__list-item">Urban Analytics Systems</li>
              <li className="block__list-item">Video Intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">What We Build</span>
            <h2 className="block__heading">Systems Built for Complexity</h2>
            <p className="block__body">
              From real-time video intelligence to city-wide ESG dashboards,
              our platforms handle data volumes that matter.
            </p>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">DIST — Digital Infrastructure Stack</li>
              <li className="block__list-item">Predictive Analytics Engine</li>
              <li className="block__list-item">Multi-source Data Fusion</li>
              <li className="block__list-item">Real-time Monitoring & Alerts</li>
              <li className="block__list-item">Regulatory Reporting Automation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Impact</span>
            <h2 className="block__heading">Scale That Speaks for Itself</h2>
            <p className="block__body">
              Deployed across municipalities, enterprises, and public
              institutions in 12+ countries.
            </p>
          </div>
          <div className="block">
            <ul className="block__list">
              <li className="block__list-item">200 + Projects Delivered</li>
              <li className="block__list-item">12 + Countries</li>
              <li className="block__list-item">40 M + Data Points Processed Daily</li>
              <li className="block__list-item">98% Uptime SLA</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
