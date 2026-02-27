import '../../public/styles/pages/analytics.css'

export default function Analytics() {
  return (
    <>
      {/* Hero */}
      <section className="page cap-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="cap-hero__left">
            <p className="cap-hero__eyebrow">Risk AI, Fraud & Threat Intelligence</p>
            <h1 className="cap-hero__heading">CAPABILITIES</h1>
            <p className="cap-hero__num">41</p>
          </div>
          <div className="cap-hero__right">
            <div className="cap-hero__tags">
              <span>Infrastructure-level fraud and risk analytics.</span>
            </div>
            <div className="cap-hero__tag-grid">
              <span className="cap-tag">Network federation</span>
              <span className="cap-tag">Near-real-time correlation</span>
              <span className="cap-tag">Platform-abuse detection</span>
              <span className="cap-tag">Online signal modelling</span>
            </div>
          </div>
        </div>
      </section>

      {/* DPI Section */}
      <section className="page section--light cap-section" data-nav-theme="light">
        <div className="cap-section__inner">
          <div className="cap-section__left">
            <span className="cap-label cap-label--blue">/ Analytical Layer /</span>
            <h2 className="cap-section__heading">DPI as an Analytical Layer</h2>
            <p>In converged networks, infrastructure observability is critical.</p>
            <p>At 7Generation, Deep Packet Inspection (DPI) is not treated as a network enforcement tool — it is an analytical layer that captures interactions and classifies emergent usage patterns.</p>
          </div>
          <div className="cap-section__right">
            <p className="cap-section__right-label">Combined actions:</p>
            <ul className="cap-check-list">
              <li>Network metadata</li>
              <li>Behavioural analytics</li>
              <li>AI-based anomaly detection</li>
            </ul>
            <p className="cap-note">DPI becomes part of a unified data intelligence and decision support loop, defined by its rather than reactive enforcement.</p>
          </div>
        </div>
      </section>

      {/* NetVision */}
      <section className="page section--dark cap-section" data-nav-theme="dark">
        <div className="cap-section__inner">
          <div className="cap-section__left">
            <span className="cap-label">/ Predictive Layer /</span>
            <h2 className="cap-section__heading cap-section__heading--light">NetVision —<br />Data & Predictive Analytics</h2>
            <p className="cap-body-light">NetVision is designed to process large-scale telecom data. The platform combines network analytics, data correlation, and remediation models to:</p>
            <ul className="cap-bullet-list">
              <li>analyse subscriber behaviour</li>
              <li>support personalised offers, including streaming audiences</li>
              <li>forecast risk through scoring models</li>
              <li>identify service velocity and the operator network</li>
            </ul>
            <p className="cap-body-light">NetVision can operate as a standalone analytics layer or as part of a broader DI&ST and DI&ST stack.</p>
          </div>
          <div className="cap-section__right">
            <h3 className="cap-subsection-heading">Key NetVision Capabilities</h3>
            <div className="cap-kv-list">
              <div className="cap-kv-item">
                <h4>Infrastructure Big Data Analytics</h4>
                <p>Real-time, large-scale analytics of network, signalling and network flows.</p>
              </div>
              <div className="cap-kv-item">
                <h4>Predictive Risk Models</h4>
                <p>Forecasting churn and other subscriber online behaviour.</p>
              </div>
              <div className="cap-kv-item">
                <h4>Dynamic Risk Scoring</h4>
                <p>Scoring and scoring across devices, sessions, sessions, and channels.</p>
              </div>
              <div className="cap-kv-item">
                <h4>Scenario & Stress Analytics</h4>
                <p>Scenario and stress modelling to ensure system behaviour.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Monetisation */}
      <section className="page section--dark cap-section cap-section--border" data-nav-theme="dark">
        <div className="cap-section__inner">
          <div className="cap-section__left">
            <span className="cap-label">/ Predictive Analytics /</span>
            <h2 className="cap-section__heading cap-section__heading--light">Data & Predictive Analytics<br />for Audience Monetisation</h2>
            <div className="cap-kv-list cap-kv-list--col2">
              <div className="cap-kv-item">
                <span className="cap-kv-num">01</span>
                <p>Identify stable consumption and interest profiles</p>
              </div>
              <div className="cap-kv-item">
                <span className="cap-kv-num">02</span>
                <p>Form audience segments without access to personal data</p>
              </div>
            </div>
          </div>
          <div className="cap-section__right">
            <p className="cap-body-light">Beyond risk and resolution use cases, NetVision enables telecom operators to build privacy-safe audience segments at the infrastructure level.</p>
            <p className="cap-body-light">Based on network and behavioural patterns, the platform achieves operations of:</p>
            <div className="cap-kv-list cap-kv-list--col2">
              <div className="cap-kv-item">
                <span className="cap-kv-num">03</span>
                <p>Increase targeting accuracy and advertising inventory value</p>
              </div>
              <div className="cap-kv-item cap-kv-item--highlight">
                <p>This approach enables data monetisation at the infrastructure layer while remaining fully compliant with privacy and regulatory requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="page section--dark cap-section" data-nav-theme="dark">
        <div className="cap-section__inner">
          <div className="cap-section__left">
            <span className="cap-label">/ Compliance /</span>
            <h2 className="cap-section__heading cap-section__heading--light">Regulatory &<br />Operational Compatibility</h2>
            <p className="cap-body-light">Interoperable and regulated payloads are delivered through a compliance-driven assurance environment.</p>
          </div>
          <div className="cap-section__right">
            <ul className="cap-check-list cap-check-list--light">
              <li>Regulated localisation</li>
              <li>National digital infrastructure</li>
              <li>Cross-jurisdictional deployment scenarios</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Restricted Streams */}
      <section className="page section--light cap-streams" data-nav-theme="light">
        <span className="cap-label cap-label--blue">/ Streams /</span>
        <h2 className="cap-streams__heading">Restricted Streams</h2>
        <div className="cap-streams__grid">
          <div className="cap-stream-card">
            <h3>Telecom Intelligence</h3>
            <p>Traffic integrity, network telemetries, DPI, signalling analytics.</p>
          </div>
          <div className="cap-stream-card">
            <h3>Lawful Interception & SORM</h3>
            <p>Regulatory and compliance frameworks, mediation, session access layers.</p>
          </div>
          <div className="cap-stream-card">
            <h3>Behavioural & Identity Intelligence</h3>
            <p>Subscriber identities, usage collaboration in platforms.</p>
          </div>
        </div>
      </section>
    </>
  )
}
