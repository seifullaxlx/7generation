import '../../public/styles/pages/engineering-culture.css'
import IconListItem from "../components/IconListItem.jsx";

const capCards = [
  {
    title: 'Infrastructure Thinking',
    desc: 'All solutions are designed to:\n' +
        '• integrate into existing customer environments \n' +
        '• scale without analytical degradation \n' +
        '• withstand high load and failure scenarios \n' +
        '\n' +
        'Up to 90% of custom requirements are covered by existing 7Generation mechanisms, reducing deployment risk and time to value.',
  },
  {
    title: 'Data & Signals',
    desc: 'Analysis is built on:\n' +
        '• metadata and behavioural patterns \n' +
        '• packet- and session-level processing \n' +
        '• fusion of signals into analytical and signature-based models \n' +
        '\n' +
        'Risk detection and anomaly identification are architectural properties, not add-on features.',
  },
  {
    title: 'Laboratory Environments',
    desc: '7Generation operates a dedicated core test infrastructure where: \n' +
        '• real-world network scenarios are modelled \n' +
        '• algorithms and capture mechanics are validated \n' +
        '• system behaviour is tested under realistic conditions \n' +
        '\n' +
        'No solution is deployed without practical verification.',
  },
]

export default function EngineeringCulture() {
  return (
    <>
      {/* Hero */}
      <section className="page ec-hero section--dark" data-nav-theme="dark">
        <h1 className="ec-hero__heading">ENGINEERING CULTURE</h1>
      </section>

      {/* R&D */}
      <section className="page section--light ec-rd">
        <div className="ec-rd__inner">
          <div className="ec-rd__left">
            <span className="ec-label">/ Research &amp; Development /</span>
            <h2 className="ec-rd__heading">Research & Development</h2>
            <p className="ec-rd__p" style={{ marginBottom: '33px'}}>This approach enables:</p>
            <IconListItem icon="/img/techno.svg" text="Technological independence" />
            <IconListItem icon="/img/customization.svg" text="Deep customisation of solutions" />
            <IconListItem icon="/img/pipelines.svg" text="End-to-end control over data and analytics pipelines" />
          </div>
          <div className="ec-rd__right">
            <div className="ec-rd__card">
              <p>
                7Generation builds technology from first principles.<br />
                <br/>
                All systems, platforms, and analytical models are developed entirely by internal engineering and research teams
              </p>

              <span>
                • No third-party cores or borrowed codebases <br />
                • Architecture, data processing, and analytics are proprietary<br />
                • Full control across data capture, processing, and interpretation<br />
              </span>
            </div>
          </div>
        </div>
      </section>



      {/* R&D Structure - intro */}
      <section className="page section--light ec-rds">
        <span className="ec-rds__label">/ R&D Structure /</span>
        <h2 className="ec-rds__heading">7Generation’ s R&D function is built <br /> around two closely integrated teams.</h2>
      </section>

      {/* R&D Structure - Signatures & Analytics Team */}
      <section className="page section--dark ec-rds-detail">
        <div className="ec-rds-detail__inner">
          <div className="ec-rds-detail__left">
            <h2 className="ec-rds-detail__name">Signatures &amp; Analytics Team</h2>
            <p className="ec-rds-detail__sub">This team operates at the level of:</p>
          </div>
          <div className="ec-rds-detail__right">
            <p>Its focus is identifying subtle patterns and relationships in data flows that remain invisible to conventional systems.</p>
          </div>
          <div className="ec-rds-detail__grid">
            <div className="ec-rds-detail__card">
              <img src="/img/beh-models.svg" alt="" />
              <span>Behavioural models</span>
            </div>
            <div className="ec-rds-detail__card">
              <img src="/img/detection-logic.svg" alt="" />
              <span>Detection logic</span>
            </div>
            <div className="ec-rds-detail__card">
              <img src="/img/analytical-sign.svg" alt="" />
              <span>Analytical signatures</span>
            </div>
            <div className="ec-rds-detail__card ec-rds-detail__card--outcome">
              <img src="/img/outcome.svg" alt="" />
              <span>Outcome: high analytical precision in complex and noisy digital environments.</span>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Structure - Data Capture & Processing Team */}
      <section className="page section--light ec-capture">
        <span className="ec-rds__label">/ Data Capture /</span>
        <h2 className="ec-capture__name">Data Capture &amp; Processing Team</h2>
        <p className="ec-capture__sub">This team operates at the level of:</p>
        <div className="ec-rds-detail__grid">
          <div className="ec-rds-detail__card ec-capture__card">
            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px'}}>
              <img style={{ width: '31px', height: '31px'}} src="/img/home-icons/blockchain.svg" alt="" />
            </div>
            <span>Network packets</span>
          </div>
          <div className="ec-rds-detail__card ec-capture__card">
            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px'}}>
              <img style={{ width: '31px', height: '31px'}} src="/img/network.svg" alt="" />
            </div>
            <span>Data extraction mechanisms</span>
          </div>
          <div className="ec-rds-detail__card ec-capture__card">
            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px'}}>
              <img style={{ width: '31px', height: '31px'}} src="/img/data.svg" alt="" />
            </div>
            <span>Protocols</span>
          </div>
          <div className="ec-rds-detail__card ec-rds-detail__card--outcome ec-capture__card" style={{ border: 'none'}}>
            <span>Its role is to design capture principles that ensure analytical models receive a complete and accurate representation of digital interactions, even in complex network topologies.</span>
          </div>
        </div>
      </section>

      {/* Unique Engineering Capabilities */}
      <section className="page ec-capabilities" data-nav-theme="dark">
        <div className="ec-capabilities__intro">
          <div>
            <span>/ Engineering Capabilities /</span>
            <h2 className="ec-capabilities__heading">Unique Engineering Capabilities</h2>
          </div>
          <p style={{ color: '#fafafa', fontSize: '16px'}}>7Generation develops SIGINT-class systems capable of operating post-NAT
            — in environments where most solutions lose identification accuracy and
            analytical integrity. This capability preserves correctness of analytics in
            modern, highly abstracted network infrastructures.
          </p>
        </div>
        <div className="ec-capabilities__grid">
          {capCards.map((card, i) => (
            <div className="ec-cap-card" key={i}>
              <span>/ Engineering Principles /</span>
              <h3>{card.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
