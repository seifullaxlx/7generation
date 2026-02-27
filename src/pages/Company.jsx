import '../../public/styles/pages/company.css'

export default function Company() {
  return (
    <>
      {/* Hero */}
      <section className="page company-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="company-hero__left">
            <h1 className="company-hero__heading">ABOUT<br />COMPANY</h1>
          </div>
          <div className="company-hero__right">
            <div className="company-hero__col">
              <span className="company-hero__label">Overview / Telecom</span>
              <p>7Generation is a deep-tech company that builds software and data infrastructure for telecom operators, regulators, and enterprises across CIS and MENA markets.</p>
            </div>
            <div className="company-hero__col">
              <span className="company-hero__label">Mission / Principles</span>
              <p>We believe digital infrastructure should be transparent, accountable and resilient. Every product we build is designed for scale, compliance and long-term operability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="page section--light company-capabilities" data-nav-theme="light">
        <h2 className="company-section-heading">Core Capabilities</h2>
        <div className="company-capabilities__grid">
          <div className="company-cap-card">
            <h3>Deep Telecom Data Analytics</h3>
            <p>Petabyte-scale telemetry pipelines that collect, process and classify network events across all layers of the telecom stack — from raw packet flows to subscriber behavioural signals.</p>
          </div>
          <div className="company-cap-card">
            <h3>Next-Gen Traffic Insight & Control</h3>
            <p>Platforms that run on top of DPI infrastructure to give operators real-time traffic classification, network policy control, usage analytics and subscriber-level intelligence.</p>
          </div>
          <div className="company-cap-card">
            <h3>Behavioural & Threat Intelligence</h3>
            <p>ML-powered engines that model normal usage patterns and surface anomalies — enabling detection of fraud, abuse, coordinated attack behaviour and regulatory violations.</p>
          </div>
          <div className="company-cap-card">
            <h3>Lawful Interception & DI&ST-Class Systems</h3>
            <p>Compliant interception platforms and Digital Integrity & Safety Tech solutions built to ETSI, 3GPP and national regulatory frameworks across multiple jurisdictions.</p>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="page section--dark company-problems" data-nav-theme="dark">
        <h2 className="company-section-heading">Problems We Solve</h2>
        <div className="company-problems__grid">
          <div className="company-problem-card">
            <h3>Anomalous behaviour goes unnoticed</h3>
            <p>Without behavioural baselines, operators cannot distinguish normal traffic spikes from coordinated attacks, fraud rings or regulatory violations in real time.</p>
          </div>
          <div className="company-problem-card">
            <h3>Fraud and abuse are detected too late</h3>
            <p>Rule-based systems miss evolving fraud patterns. By the time alerts fire, millions in revenue have already been lost and customers impacted.</p>
          </div>
          <div className="company-problem-card">
            <h3>There is no unified view of what is happening in the network</h3>
            <p>Siloed systems — OSS, BSS, security, analytics — produce fragmented data with no single source of truth, making root-cause analysis slow and unreliable.</p>
          </div>
          <div className="company-problem-card">
            <h3>Operators lack visibility and control over their own traffic</h3>
            <p>Legacy DPI systems offer coarse classification with no subscriber-level context. Operators cannot enforce policies, monetise data, or meet compliance obligations.</p>
          </div>
        </div>
      </section>
    </>
  )
}
