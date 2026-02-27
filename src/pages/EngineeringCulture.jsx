import '../../public/styles/pages/engineering-culture.css'

const capCards = [
  {
    title: 'Infrastructure Thinking',
    desc: 'Every system is designed to operate at telecom scale — not as a prototype, but as production infrastructure from day one. Reliability, fault tolerance, and horizontal scalability are non-negotiable constraints.',
  },
  {
    title: 'Data & Signals',
    desc: 'The team works directly with raw network telemetry — building processing pipelines, analytical models and detection systems from the ground up rather than relying on pre-processed data vendors.',
  },
  {
    title: 'Laboratory Environments',
    desc: '7Generation maintains internal lab environments that replicate real network conditions — enabling safe testing of detection models and integration scenarios before deployment.',
  },
]

export default function EngineeringCulture() {
  return (
    <>
      {/* Hero */}
      <section className="page ec-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="ec-hero__left">
            <h1 className="ec-hero__heading">ENGINEERING<br />CULTURE</h1>
          </div>
          <div className="ec-hero__right">
            <p>The way 7Generation builds is inseparable from what it builds. Engineering culture at 7G is defined by first-principles thinking, long-term system ownership, and a commitment to measurable outcomes.</p>
          </div>
        </div>
      </section>

      {/* R&D */}
      <section className="page section--dark ec-rd" data-nav-theme="dark">
        <div className="ec-rd__inner">
          <div className="ec-rd__left">
            <span className="ec-label">/ Research &amp; Development /</span>
            <h2 className="ec-rd__heading">The teams that drive the platform forward</h2>
            <ul className="ec-rd__list">
              <li>Build new detection capabilities</li>
              <li>Develop internal analytical tooling</li>
              <li>Research emerging threat vectors and network patterns</li>
              <li>Define engineering objectives based on field signal</li>
            </ul>
          </div>
          <div className="ec-rd__right">
            <div className="ec-rd__card">
              <p>7Generation's R&amp;D function is built around two closely integrated teams.</p>
              <p>Each team operates with clear domain ownership while sharing a common data infrastructure and engineering standards.</p>
            </div>
          </div>
        </div>
        <p className="ec-rd__tagline">7Generation's R&amp;D function is built around two closely integrated teams.</p>
      </section>

      {/* Signatures & Analytics Team */}
      <section className="page section--dark ec-team-section" data-nav-theme="dark">
        <h2 className="ec-team-section__heading">Signatures &amp; Analytics Team</h2>
        <p className="ec-team-section__sub">The team develops analytical models and detection signatures.</p>
        <ul className="ec-team-section__list">
          <li>Develops detection signatures and classification models</li>
          <li>Maintains anomaly baselines and alert thresholds</li>
          <li>Validates analytical outputs against live network data</li>
          <li>Researches new fraud and abuse patterns</li>
        </ul>
      </section>

      {/* Data Capture & Processing Team */}
      <section className="page section--dark ec-team-section ec-team-section--border" data-nav-theme="dark">
        <h2 className="ec-team-section__heading">Data Capture &amp; Processing Team</h2>
        <p className="ec-team-section__sub">The team owns the pipeline from raw network telemetry to structured events.</p>
        <div className="ec-team-section__cols">
          <ul className="ec-team-section__list">
            <li>Packet capture and DPI integration</li>
            <li>Stream processing and event normalisation</li>
          </ul>
          <ul className="ec-team-section__list">
            <li>Data enrichment and correlation engines</li>
            <li>Storage architecture and data lake management</li>
          </ul>
        </div>
      </section>

      {/* Unique Engineering Capabilities */}
      <section className="page section--dark ec-capabilities" data-nav-theme="dark">
        <h2 className="ec-capabilities__heading">Unique Engineering Capabilities</h2>
        <div className="ec-capabilities__grid">
          {capCards.map(({ title, desc }) => (
            <div className="ec-cap-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
