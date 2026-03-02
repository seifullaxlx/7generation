import '../../public/styles/pages/company.css'
import ContactsSection from "../components/ContactsSection.jsx";

const capabilities = [
  {
    title: 'Deep Telecom Data Analytics',
    desc: 'Petabyte-scale telemetry pipelines that collect, process and classify network events across all layers of the telecom stack — from raw packet flows to subscriber behavioural signals.',
  },
  {
    title: 'Next-Gen Traffic Insight & Control',
    desc: 'Platforms that run on top of DPI infrastructure to give operators real-time traffic classification, network policy control, usage analytics and subscriber-level intelligence.',
  },
  {
    title: 'Behavioural & Threat Intelligence',
    desc: 'ML-powered engines that model normal usage patterns and surface anomalies — enabling detection of fraud, abuse, coordinated attack behaviour and regulatory violations.',
  },
  {
    title: 'Lawful Interception & DI&ST-Class Systems',
    desc: 'Compliant interception platforms and Digital Integrity & Safety Tech solutions built to ETSI, 3GPP and national regulatory frameworks across multiple jurisdictions.',
  },
]

const problems = [
  {
    num: '/ 01 /',
    title: 'Abnormal behaviour goes unnoticed',
    desc: 'Many suspicious scenarios in networks and data flows do not look like incidents.\n' +
        'We identify unusual and hidden behaviour that standard monitoring and security tools miss. ',
  },
  {
    num: '/ 02 /',
    title: 'Fraud and abuse are detected too late',
    desc: 'Most systems react only after damage has occurred. We detect suspicious activity at the infrastructure level — before it reaches transactions or services. Malicious activity mimics normal usage\n' +
        '\n' +
        'Automation, bots, and coordinated actions are designed to blend into legitimate traffic.\n' +
        'We distinguish natural behaviour from artificial and coordinated patterns using behavioural\n' +
        'signatures.',
  },
  {
    num: '/ 03 /',
    title: 'There is no unified view of what is happening in the network',
    desc: 'Data is scattered across network layers, platforms, and systems.\n' +
        '\n' +
        'We connect these signals into a coherent picture of how the infrastructure actually operates.\n' +
        '+ управление трафиком и CVM для нужд мобильных операторов',
  },
  {
    num: '/ 04 /',
    title: 'Operators lack visibility and control over their own traffic',
    desc: 'We enable intelligent traffic management and data-driven QoS control to maintain service quality at scale.',
  },
]

export default function Company() {
  return (
    <>
      {/* Hero */}
      <section className="page company-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="company-hero__left">
            <h1 className="company-hero__heading">ABOUT COMPANY</h1>
            <p className="company-hero__label">7Generation is a deep-tech company specializing in infrastructure-level data<br />
              intelligence for service providers and public-sector institutions.<br />
              It builds advanced systems for real-time data processing, analytics, and digital<br />
              risk insight — targeting high-load telecom, security, and governance use cases.
            </p>
          </div>
          <div className="company-hero__right">
            <div className="company-hero__info">
              <p>KazDream → 7Generation <br/>
                Kazdream is a technology holding focused on building and operating<br />
                complex digital systems at scale. 7Generation is Kazdream’s export brand,<br />
                created to deliver infrastructure-level data intelligence to international<br />
                providers and public-sector institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="page section--light company-capabilities" data-nav-theme="light">
        <span>/ Capabilities /</span>
        <h2 className="company-section-heading">Core Capabilities</h2>
        <div className="company-capabilities__grid">
          {capabilities.map(({ title, desc }) => (
            <div className="company-cap-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="page company-problems" data-nav-theme="dark">
        <div className="company-problems-title">
          <span>/ Problems /</span>
          <h2>Problems We Solve</h2>
        </div>
        <div className="company-problems__grid">
          {problems.map(({ num, title, desc }) => (
            <div className="company-problem-card" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactsSection />
    </>
  )
}
