import '../../public/styles/pages/dist.css'

export default function Dist() {
  const layers = [
    { num: '01', name: 'Traffic', desc: 'data flows, signalling, anomalies' },
    { num: '02', name: 'Behaviour', desc: 'usage patterns, coordination, deception' },
    { num: '03', name: 'Identity', desc: 'relationships between users, devices, and accounts' },
    { num: '04', name: 'Risk', desc: 'scoring, forecasting, scenarios' },
    { num: '05', name: 'Integrity Outcomes', desc: 'prevention, compliance, trust' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page dist-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="dist-hero__left">
            <h1 className="dist-hero__heading">From Security to<br />Digital Integrity</h1>
          </div>
          <div className="dist-hero__right">
            <p>Digital Integrity & Safety Tech (DI&ST) reflects the transition — from cyber-defence to ecosystem governance through data and analytics. DI&ST treats security not as a set of controls, but as the outcome of observable and predictable system behaviour.</p>
          </div>
        </div>
      </section>

      {/* What is DI&ST */}
      <section className="page section--light dist-what" data-nav-theme="light">
        <div className="dist-what__inner">
          <span className="dist-label dist-label--blue">/ Digital Integrity /</span>
          <h2 className="dist-what__heading">What is Digital Integrity & Safety Tech</h2>
          <p className="dist-what__body">Digital Integrity & Safety Tech (DI&ST) is a class of software and analytical technologies focused on maintaining the integrity of digital ecosystems.</p>
          <p className="dist-what__body">DI&ST operates between infrastructure and services, analysing traffic, behaviour, identities, and risk in real time and at scale.</p>
        </div>
      </section>

      {/* DI&ST Layers */}
      <section className="page section--dark dist-layers" data-nav-theme="dark">
        <div className="dist-layers__inner">
          <div className="dist-layers__left">
            <span className="dist-label">/ Layer /</span>
            <h2 className="dist-layers__heading">DI&ST Layers</h2>
            <ul className="dist-layers__list">
              {layers.map(({ num, name, desc }) => (
                <li key={num} className="dist-layer-item">
                  <span className="dist-layer-item__num">{num}</span>
                  <span className="dist-layer-item__name">{name}</span>
                  <span className="dist-layer-item__desc">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="dist-layers__right">
            <div className="dist-verticals-card">
              <h3>DI&ST Across Verticals</h3>
              <p>Telecom, finance, platforms, and public-sector systems face the same systemic risks — the difference lies only in context.</p>
              <p>DI&ST adapts across verticals while maintaining a unified analytical logic.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
