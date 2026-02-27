import '../../public/styles/pages/home.css'
import ContactsSection from '../components/ContactsSection'

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────── */}
      <section className="page section--hero page--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <p className="block__heading__p">
              Vendor-agnostic Data Intelligence for Providers & Public-Sector Institutions
            </p>
            <h1 className="block__heading">7Generation</h1>
          </div>
          <div className="block">
            <p className="block__body">
              As digital infrastructures converge, risk no longer resides within isolated systems. It emerges across networks, data flows, and transactions — often long before it becomes visible in services, reports, or compliance metrics.
              <br/>
              <br/>
              Many providers and public-sector institutions still operate reactively, not due to a lack of controls, but because infrastructure behaviour itself remains insufficiently observable.
              <br/>
              <br/>
              7Generation addresses this gap by enabling infrastructure-level data intelligence, allowing digital ecosystems to be understood, governed, and kept predictable at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="page section--light">
        <div className="page-grid" style={{ minHeight: '500px' }}>
          <div className="second-section-title">
            <span>/ Infrastructure /</span>
            <h1>Infrastructure Data Intelligence at Scale</h1>
          </div>
          <div className="second-section-body" style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
            <p style={{ marginBottom: "24px"}}>7Generation works with infrastructure-level data, including:</p>
            <ul>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/network.png" alt=""/>
                </div>
                <p>Network traffic and signalling flows</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/telecom.png" alt=""/>
                </div>
                <p>Telecom and service metadata</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/behavioural.png" alt=""/>
                </div>
                <p>Behavioural and transactional patterns</p>
              </li>
            </ul>
            <p style={{ marginTop: "37px" }}>to build a ground-truth view of how digital systems actually operate, rather than how they are represented at the service or application layer.</p>
          </div>
          <div className="second-section-desc">
            <p>Telecom operators, financial institutions, platforms, and public services
              increasingly rely on the same underlying infrastructure layers. Yet visibility remains fragmented across domains.
              <br />
              <br />
              Organisations may see transactions, but not the behaviour that shapes them. They may investigate incidents,
              while missing the patterns that caused them.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Core Domains ─────────────────────────── */}
      <section className="page section--dark home-domains" data-nav-theme="dark">
        <div className="page-grid home-domains-inner">
          <div className="core-domains">
            <div className="home-domains__title">
              <span className="home-domains__label">/ Capabilities /</span>
              <h2 className="home-domains__heading">
                Core Domains — <br />
                Where Risk <br />
                Takes Shape
              </h2>
            </div>
            <div className="home-domain-card home-domain-card--active">
              <span className="home-domain-card__num">/ 01 /</span>
              <h3>Infrastructure-level <br /> Anti-Fraud Intelligence</h3>
              <p>Fraud detection traditionally begins at the transaction stage, when losses are already difficult to prevent. <br />
                Infrastructure-level analytics provide earlier visibility into fraudulent and illegitimate scenarios — while digital processes are still forming, supporting prevention rather than post-event response</p>
            </div>
            <div className="home-domain-card home-domain-card--active">
              <span className="home-domain-card__num">/ 02 /</span>
              <h3>Signalling & <br /> Metadata Intelligence</h3>
              <p>Application-layer data alone rarely reveals how abuse propagates.
                <br />
                <br />
                Telecom metadata and signalling expose early indicators of automation, coordination, and misuse that remain invisible to service-layer controls.
                <br />
                <br />
                At 7Generation, DPI is applied not as network equipment, but as an observability and analytical layer, integrated into a controlled and regulated environment </p>
            </div>
            <div className="home-domain-card">
              <span className="home-domain-card__num">/ 03 /</span>
              <h3>Behavioural & <br />Identity Analytics</h3>
              <p>Account abuse, synthetic identities, and coordinated fraud are rarely identifiable through isolated signals.
                <br />
                <br />
                They become visible only when behaviour is analysed across users, devices, sessions, and platforms — as behavioural and identity graphs rather than discrete events</p>
            </div>
            <div className="home-domain-card">
              <span className="home-domain-card__num">/ 04 /</span>
              <h3>Netalytix — Data & <br /> Predictive Analytics</h3>
              <p>Operational decisions are often constrained by delayed or incomplete data.
                <br />
                <br />
                Netalytix enables continuous analysis of large-scale infrastructure data to support:
                <br />
                <br />
                • service quality and Cost of Service (CoS) assessment<br />
                • subscriber and traffic behaviour analysis<br />
                • churn, risk, and behavioural forecasting<br />
                • dynamic scoring and scenario-based modelling<br />
                <br />
                In addition, Netalytix enables privacy-safe audience formation and advertising traffic management, allowing operators to monetise infrastructure-level insights without access to personal data.</p>
            </div>
            <div className="home-domain-card">
              <span className="home-domain-card__num">/ 05 /</span>
              <h3>Infrastructure <br /> Resilience Intelligence</h3>
              <p>Outages and cascading failures rarely occur without warning.
                <br />
                <br />
                Resilience analytics make it possible to model overloads, failures, and geo-related risks before infrastructure degradation impacts services or downstream ecosystems.</p>
            </div>
          </div>

          <div className="home-why-matters">
            <div className="home-why-matters__left">
              <span className="home-domains__label">/ Infrastructure /</span>
              <h2 className="home-why-matters__heading">Why This Matters</h2>
              <p className="home-why-matters__body">
                This shift underpins Digital Integrity & Safety Tech <br />
                (DI&ST) — a data-driven approach focused on <br />
                predictable, lawful, and resilient ecosystem behaviour
              </p>
            </div>
            <div className="home-why-matters__right">
              <p>Infrastructure-level intelligence shifts organisations: </p>

              <ul>
                <li>
                  <span>/ 01 /</span>
                  <p>From incident response to behaviour understanding</p>
                </li>
                <li>
                  <span>/ 02 /</span>
                  <p>From generic rules to adaptive analytics</p>
                </li>
                <li>
                  <span>/ 03 /</span>
                  <p>From vendor dependency to architectural flexibility</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why 7Generation ──────────────────────── */}
      <section className="page section--light home-why7g" data-nav-theme="light">
        <div className="home-why7g__header">
          <span>/ Why /</span>
          <h2 className="home-why7g__heading">Why 7Generation</h2>
        </div>
        <ul className="home-why7g__list">
          <li className="home-why7g__item">
            <div className="home-why7g__icon">
              <img src="/public/img/home-icons/find.svg" alt=""/>
            </div>
            <h3>Data intelligence, not static reports</h3>
            <p>We analyse digital system behaviour end-to-end, not isolated incidents, alerts, or services.</p>
          </li>
          <li className="home-why7g__item">
            <div className="home-why7g__icon">
              <img src="/public/img/home-icons/wifi.svg" alt=""/>
            </div>
            <h3>Infrastructure observability <br /> (Infrastructure Truth)</h3>
            <p>Working with primary signals — traffic, metadata, behaviour — provides earlier and more accurate insight into systemic risk.</p>
          </li>
          <li className="home-why7g__item">
            <div className="home-why7g__icon">
              <img src="/public/img/home-icons/settings.svg" alt=""/>
            </div>
            <h3>Pre-transaction risk detection</h3>
            <p>Fraud, abuse, and anomalies are identified
              at the stage where digital processes are formed, not after damage has occurred.</p>
          </li>
          <li className="home-why7g__item">
            <div className="home-why7g__icon">
              <img src="/public/img/home-icons/blockchain.svg" alt=""/>
            </div>
            <h3>DI&ST as the next stage <br /> of mature cybersecurity</h3>
            <p>Digital Integrity & Safety Tech extends traditional cybersecurity where risks become economic, regulatory, and cross-sectoral.</p>
          </li>
          <li className="home-why7g__item">
            <div className="home-why7g__icon">
              <img src="/public/img/home-icons/export.svg" alt=""/>
            </div>
            <h3>Export-grade engineering</h3>
            <p>Solutions are designed for scale, regulatory alignment, and deployment across international markets.</p>
          </li>
        </ul>
      </section>

      {/* ── 5. Three Cards ──────────────────────────── */}
      <section className="page section--light home-cards" data-nav-theme="dark">
        <div className="home-cards__grid">
          <div className="home-card">
            <span>/ 01 /</span>
            <h3>Proprietary Infrastructure <br /> Signature Base</h3>
            <p>
              At the core of 7Generation’s technology lies one of the largest proprietary infrastructure signature bases,<br />
              describing anomalous, fraudulent, and illegitimate behaviour.
              <br />
              <br />
              Signatures are continuously developed and updated across:<br />
              • network protocols and signalling<br />
              • infrastructure and behavioural scenarios<br />
              • cross-platform and cross-industry correlations<br />
              <br />
              This enables early-stage risk detection, well before issues manifest as transactions, losses, or regulatory incidents.
            </p>
          </div>
          <div className="home-card">
            <span>/ 02 /</span>
            <h3>Proprietary <br /> Technology Cores</h3>
            <p>
              7Generation does not rely on acquired codebases, third-party engines, or licensed core technologies. <br />
              <br />
              All key platform components —<br />
              analytics, data correlation, models, scoring, and <br />
              scenario engines —<br />
              are developed in-house.
              <br />
              <br />
              This ensures:<br />
              • architectural transparency<br />
              • full control over analytical quality<br />
              • independence from vendors and external <br /> constraints
            </p>
          </div>
          <div className="home-card">
            <span>/ 03 /</span>
            <h3>Data-driven, not rule-based</h3>
            <p>
              Traditional rule-based systems rapidly lose<br />
              effectiveness in environments shaped by automated<br />
              fraud and evolving user behaviour.<br />
              <br />
              7Generation’s approach is fully data-driven:<br />
              • models learn from real digital system behaviour<br />
              • analytics adapt to emerging abuse patterns<br />
              • infrastructure and user dynamics are<br /> continuously accounted for
            </p>
          </div>
        </div>
        <div className="home-card__footer">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Vendor-agnostic by design</h3>
            <span>/ 04 /</span>
          </div>
          <div>
            <p>7Generation solutions are built as an overlay intelligence layer<br />
              that integrates seamlessly with existing infrastructures of:
              <br />
              <br />
              • telecom operators<br />
              • banks and payment providers<br />
              • platforms and public-sector systems<br />
              <br />
              No vendor lock-in.<br />
              No forced infrastructure replacement.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Contacts ─────────────────────────────── */}
      <ContactsSection />
    </>
  )
}
