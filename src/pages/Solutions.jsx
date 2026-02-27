import '../../public/styles/pages/solutions.css'

export default function Solutions() {
  const verticals = [
    {
      title: 'Telecom Operators',
      what: 'What we do:',
      items: [
        'DPI-based traffic intelligence and QoS management',
        'Subscriber analytics and behavioural profiling',
        'Revenue assurance and fraud detection',
        'Lawful interception and regulatory compliance',
        'Network anomaly detection and threat response',
      ],
    },
    {
      title: 'Public-Sector Institutions',
      what: 'What we do:',
      items: [
        'National digital infrastructure monitoring',
        'Public safety analytics and incident detection',
        'Identity and access intelligence at scale',
        'Regulatory compliance and audit systems',
        'Critical infrastructure protection frameworks',
      ],
    },
    {
      title: 'Banks & Payment Service Providers',
      what: 'What we do:',
      items: [
        'Transaction fraud detection and risk scoring',
        'Behavioural biometrics and session analytics',
        'Anti-money laundering signal enrichment',
        'Device and identity correlation at scale',
        'Regulatory reporting and compliance pipelines',
      ],
    },
    {
      title: 'Marketplaces & Platforms',
      what: 'What we do:',
      items: [
        'Abuse detection and policy enforcement',
        'Seller and buyer behavioural analytics',
        'Fake account and coordinated activity detection',
        'Ad fraud and inventory quality monitoring',
        'Trust and safety scoring frameworks',
      ],
    },
    {
      title: 'National & Critical Infrastructure',
      what: 'What we do:',
      items: [
        'OT/IT convergence monitoring and anomaly detection',
        'Supply chain integrity and provenance tracking',
        'Physical-digital threat correlation',
        'Incident response data pipelines',
        'Resilience analytics and continuity planning',
      ],
    },
    {
      title: 'ESG & Public Safety Projects',
      what: 'What we do:',
      items: [
        'Emergency location intelligence (LiveSignal)',
        'Digital inclusion and device access programmes',
        'Public safety analytics for government agencies',
        'ESG reporting and impact measurement systems',
        'Technology access for underserved communities',
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page sol-hero section--dark" data-nav-theme="dark">
        <h1 className="sol-hero__heading">Solutions —<br />By Vertical</h1>
      </section>

      {/* Verticals grid */}
      <section className="page section--dark sol-verticals" data-nav-theme="dark">
        <div className="sol-verticals__grid">
          {verticals.map(({ title, what, items }) => (
            <div className="sol-card" key={title}>
              <h2 className="sol-card__title">{title}</h2>
              <p className="sol-card__what">{what}</p>
              <ul className="sol-card__list">
                {items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer frameworks */}
      <section className="page section--dark sol-frameworks" data-nav-theme="dark">
        <div className="sol-frameworks__grid">
          <div className="sol-fw-card">
            <h3>Engineering & Safety</h3>
            <p>Infrastructure-grade systems engineered for resilience, performance and regulatory alignment across all verticals.</p>
          </div>
          <div className="sol-fw-card">
            <h3>Closed Access</h3>
            <p>Restricted deployment environments for sensitive government, defence and critical infrastructure clients.</p>
          </div>
          <div className="sol-fw-card">
            <h3>DI&ST Framework</h3>
            <p>The Digital Integrity & Safety Tech framework — a unified analytical architecture deployable across all solution verticals.</p>
          </div>
        </div>
      </section>
    </>
  )
}
