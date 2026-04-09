import '../../public/styles/pages/analytics.css'
import ContactsSection from "../components/ContactsSection.jsx";

const netVisionCapabilities = [
  { title: 'Infrastructure Big Data Analytics', desc: 'Real-time, large-scale analysis of network, signalling, and telecom metadata.' },
  { title: 'Predictive Risk Models', desc: 'Forecasting churn and other subscriber actions based on behavioural patterns.' },
  { title: 'Dynamic Risk Scoring', desc: 'Multi-factor risk scoring across users, devices, sessions, and processes.' },
  { title: 'Scenario & Stress Analytics', desc: 'Scenario-based modelling to assess system resilience.' },
]

const audienceItems = [
  { num: '/01/', text: 'Identify stable consumption and interest profiles' },
  { num: '/02/', text: 'Form audience segments without access to personal data' },
  { num: '/03/', text: 'Increase targeting accuracy and advertising inventory value' },
  { num: '*', text: 'This approach enables data monetisation at the infrastructure level, while remaining fully compliant with privacy and regulatory requirements.' },
]

const streamCards = [
  { title: 'Telecom Intelligence', desc: 'Traffic integrity, network anomalies, DPI, signalling analytics' },
  { title: 'Lawful Interception & SORM', desc: 'Regulatory architectures, mediation, secure access layers' },
  { title: 'Behavioural & Identity Intelligence', desc: 'Behavioural graphs, synthetic identities, cross-platform patterns' },
]

export default function Analytics() {
  return (
    <>
      {/* Hero */}
      <section className="page cap-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="cap-hero__left">
            <p>Risk & Anti-Fraud Intelligence</p>
            <h1>CAPABILITIES</h1>
          </div>
          <div className="cap-hero__right">
            <div className="cap-hero__tags">
              <p>Infrastructure-level fraud and risk analytics.</p>
            </div>
            <div className="cap-hero__tag-grid">
              <span className="cap-tag">Infrastructure fraud analytics</span>
              <span className="cap-tag">Platform abuse detection</span>
              <span className="cap-tag">Telco–bank data correlation</span>
              <span className="cap-tag">Crime signal modelling</span>
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
            <p>In converged networks, infrastructure observability is critical. <br />
              <br />
              At 7Generation, Deep Packet Inspection (DPI) is not treated as network equipment, but as an analytical layer that captures anomalous and illegitimate usage patterns.
            </p>
          </div>
          <div className="cap-section__right">
            <p className="cap-section__right-label">Combined with:</p>
            <ul className="cap-check-list">
              <li>
                <img src='https://static.tildacdn.pro/tild3734-6535-4161-a230-653966623964/Group_33267.png' className='cap-section__right-icon' />
                <p>Telecom metadata</p>
              </li>
              <li>
                <img src='https://static.tildacdn.pro/tild3466-3863-4539-b938-653232653036/Group_33268.png' className='cap-section__right-icon' />
                <p>Behavioural analytics</p>
              </li>
              <li>
                <img src='https://static.tildacdn.pro/tild6666-3936-4664-b832-323639313730/Group_33269.png' className='cap-section__right-icon' />
                <p>AI-based anomaly detection</p>
              </li>
            </ul>
            <p className="cap-note">DPI becomes part of a unified data intelligence and decision support loop, defined by its rather than reactive enforcement.</p>
          </div>
        </div>
      </section>

      {/* NetVision */}
      <section className="page section--light net-vision" data-nav-theme="dark">
        <div className="net-vision__inner">
          <div className="net-vision__left">
            <span>/ Predictive Analytics /</span>
            <h2 className="net-vision__heading">NetVision —<br />Data &amp; Predictive Analytics</h2>
            <p>Netalytix is designed to process large-scale telecom data. The platform combines network analytics, data correlation, and predictive models to:<br />
              <ul className="net-vision__left-list">
                <li>analyse subscriber behaviour</li>
                <li>support personalised offers, including advertising audiences</li>
                <li>forecast risk through scoring models</li>
                <li>assess service quality across operator networks</li>
              </ul>
            </p>
            <p>Netalytix can operate as a standalone analytics layer or as part of a broader DI&amp;ST and DI&amp;ST stack.</p>
          </div>
          <div className="net-vision__right">
            <h3>Key NetVision Capabilities</h3>
            <div>
              {netVisionCapabilities.map(({ title, desc }) => (
                <div className="cap-kv-item" key={title}>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page section--light pred-analytics">
        <div className="pred-analytics-inner">
          <div className="pred-analytics-title">
            <span>/ Predictive Analytics /</span>
            <div>
              <h2>Data & Predictive Analytics for Audience Monetisation</h2>
              <p>Beyond risk and resilience use cases, Netalytix enables telecom operators to build privacy-safe audience segments at the infrastructure level.<br />
                <br />
                Based on network and behavioural patterns, the platform allows operators to:</p>
            </div>
          </div>
          <div className="pred-analytics-content">
            <ul>
              {audienceItems.map(({ num, text, index }) => (
                <li key={index}>
                  <span>{num}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page regulatory" >
        <div className="regulatory__inner">
          <div className="regulatory__left">
            <span>/ Regulatory /</span>
            <h2>Regulatory & <br />Operational Compatibility</h2>
            <p>Sensitive and regulated capabilities are delivered <br />
              through a controlled, closed-access environment.
            </p>
          </div>
          <div className="regulatory__right">
            <p>7Generation architectures are designed with consideration for:</p>
            <div className="regulatory-item">
              <span>/ 01 /</span>
              <p>Regulated industries</p>
            </div>
            <div className="regulatory-item">
              <span>/ 02 /</span>
              <p>National digital infrastructures</p>
            </div>
            <div className="regulatory-item">
              <span>/ 03 /</span>
              <p>Cross-jurisdictional deployment scenarios</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--light streams">
        <div className="streams-inner">
          <span>/ Streams /</span>
          <h3>Restricted Streams</h3>
          <div className="streams-cards">
            {streamCards.map(({ title, desc }) => (
              <div className="streams-card" key={title}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactsSection />
    </>
  )
}
