import '../../public/styles/pages/home.css'
import ContactsSection from '../components/ContactsSection'
import DomainCard from '../components/DomainCard'
import Why7gItem from '../components/Why7gItem'
import IconListItem from '../components/IconListItem'
import HomeCard from '../components/HomeCard'

const why7gItems = [
  {
    icon: '/img/home-icons/find.svg',
    title: 'Data intelligence, not static reports',
    description: 'We analyse digital system behaviour end-to-end, not isolated incidents, alerts, or services.',
  },
  {
    icon: '/img/home-icons/wifi.svg',
    title: <>Infrastructure observability <br /> (Infrastructure Truth)</>,
    description: 'Working with primary signals — traffic, metadata, behaviour — provides earlier and more accurate insight into systemic risk.',
  },
  {
    icon: '/img/home-icons/settings.svg',
    title: 'Pre-transaction risk detection',
    description: 'Fraud, abuse, and anomalies are identified at the stage where digital processes are formed, not after damage has occurred.',
  },
  {
    icon: '/img/home-icons/blockchain.svg',
    title: <>DI&amp;ST as the next stage <br /> of mature cybersecurity</>,
    description: 'Digital Integrity & Safety Tech extends traditional cybersecurity where risks become economic, regulatory, and cross-sectoral.',
  },
  {
    icon: '/img/home-icons/export.svg',
    title: 'Export-grade engineering',
    description: 'Solutions are designed for scale, regulatory alignment, and deployment across international markets.',
  },
]

const whyMattersList = [
  { num: '/ 01 /', text: 'From incident response to behaviour understanding' },
  { num: '/ 02 /', text: 'From generic rules to adaptive analytics' },
  { num: '/ 03 /', text: 'From vendor dependency to architectural flexibility' },
]

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────── */}
      <section className="page section--hero page--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <p className="block__heading__p">
              Vendor-agnostic Data Intelligence for Providers &amp; Public-Sector Institutions
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
              <IconListItem icon="/img/home-icons/network.png" text="Network traffic and signalling flows" />
              <IconListItem icon="/img/home-icons/telecom.svg" text="Telecom and service metadata" />
              <IconListItem icon="/img/home-icons/behavioural.png" text="Behavioural and transactional patterns" />
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
            <DomainCard
              num="/ 01 /"
              active
              title={<>Infrastructure-level <br /> Anti-Fraud Intelligence</>}
              description={<>Fraud detection traditionally begins at the transaction stage, when losses are already difficult to prevent. <br />
                Infrastructure-level analytics provide earlier visibility into fraudulent and illegitimate scenarios — while digital processes are still forming, supporting prevention rather than post-event response</>}
            />
            <DomainCard
              num="/ 02 /"
              active
              title={<>Signalling &amp; <br /> Metadata Intelligence</>}
              description={<>Application-layer data alone rarely reveals how abuse propagates.
                <br /><br />
                Telecom metadata and signalling expose early indicators of automation, coordination, and misuse that remain invisible to service-layer controls.
                <br /><br />
                At 7Generation, DPI is applied not as network equipment, but as an observability and analytical layer, integrated into a controlled and regulated environment</>}
            />
            <DomainCard
              num="/ 03 /"
              title={<>Behavioural &amp; <br />Identity Analytics</>}
              description={<>Account abuse, synthetic identities, and coordinated fraud are rarely identifiable through isolated signals.
                <br /><br />
                They become visible only when behaviour is analysed across users, devices, sessions, and platforms — as behavioural and identity graphs rather than discrete events</>}
            />
            <DomainCard
              num="/ 04 /"
              title={<>Netalytix — Data &amp; <br /> Predictive Analytics</>}
              description={<>Operational decisions are often constrained by delayed or incomplete data.
                <br /><br />
                Netalytix enables continuous analysis of large-scale infrastructure data to support:
                <br /><br />
                • service quality and Cost of Service (CoS) assessment<br />
                • subscriber and traffic behaviour analysis<br />
                • churn, risk, and behavioural forecasting<br />
                • dynamic scoring and scenario-based modelling<br />
                <br />
                In addition, Netalytix enables privacy-safe audience formation and advertising traffic management, allowing operators to monetise infrastructure-level insights without access to personal data.</>}
            />
            <DomainCard
              num="/ 05 /"
              title={<>Infrastructure <br /> Resilience Intelligence</>}
              description={<>Outages and cascading failures rarely occur without warning.
                <br /><br />
                Resilience analytics make it possible to model overloads, failures, and geo-related risks before infrastructure degradation impacts services or downstream ecosystems.</>}
            />
          </div>

          <div className="home-why-matters">
            <div className="home-why-matters__left">
              <span className="home-domains__label">/ Infrastructure /</span>
              <h2 className="home-why-matters__heading">Why This Matters</h2>
              <p className="home-why-matters__body">
                This shift underpins Digital Integrity &amp; Safety Tech <br />
                (DI&amp;ST) — a data-driven approach focused on <br />
                predictable, lawful, and resilient ecosystem behaviour
              </p>
            </div>
            <div className="home-why-matters__right">
              <p>Infrastructure-level intelligence shifts organisations: </p>
              <ul>
                {whyMattersList.map(({ num, text }) => (
                  <li key={num}>
                    <span>{num}</span>
                    <p>{text}</p>
                  </li>
                ))}
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
          {why7gItems.map((item, i) => (
            <Why7gItem key={i} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      {/* ── 5. Three Cards ──────────────────────────── */}
      <section className="page section--light home-cards" data-nav-theme="dark">
        <div className="home-cards__grid">
          <HomeCard num="/ 01 /" title={<>Proprietary Infrastructure <br /> Signature Base</>}>
            <p>
              At the core of 7Generation's technology lies one of the largest proprietary infrastructure signature bases,<br />
              describing anomalous, fraudulent, and illegitimate behaviour.
              <br /><br />
              Signatures are continuously developed and updated across:<br />
              • network protocols and signalling<br />
              • infrastructure and behavioural scenarios<br />
              • cross-platform and cross-industry correlations<br />
              <br />
              This enables early-stage risk detection, well before issues manifest as transactions, losses, or regulatory incidents.
            </p>
          </HomeCard>
          <HomeCard num="/ 02 /" title={<>Proprietary <br /> Technology Cores</>}>
            <p>
              7Generation does not rely on acquired codebases, third-party engines, or licensed core technologies. <br />
              <br />
              All key platform components —<br />
              analytics, data correlation, models, scoring, and <br />
              scenario engines —<br />
              are developed in-house.
              <br /><br />
              This ensures:<br />
              • architectural transparency<br />
              • full control over analytical quality<br />
              • independence from vendors and external <br /> constraints
            </p>
          </HomeCard>
          <HomeCard num="/ 03 /" title="Data-driven, not rule-based">
            <p>
              Traditional rule-based systems rapidly lose<br />
              effectiveness in environments shaped by automated<br />
              fraud and evolving user behaviour.<br />
              <br />
              7Generation's approach is fully data-driven:<br />
              • models learn from real digital system behaviour<br />
              • analytics adapt to emerging abuse patterns<br />
              • infrastructure and user dynamics are<br /> continuously accounted for
            </p>
          </HomeCard>
        </div>
        <div className="home-card__footer">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Vendor-agnostic by design</h3>
            <span>/ 04 /</span>
          </div>
          <div>
            <p>7Generation solutions are built as an overlay intelligence layer<br />
              that integrates seamlessly with existing infrastructures of:
              <br /><br />
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
