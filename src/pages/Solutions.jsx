import '../../public/styles/pages/solutions.css'
import SolRowCard from '../components/SolRowCard'
import SolItemList from '../components/SolItemList'
import SolFw from '../components/SolFw'
import SolFwCard from '../components/SolFwCard'
import ContactsSection from "../components/ContactsSection.jsx";

const verticals = [
  {
    num: '/ 01 /',
    title: 'Telecom Operators',
    bio: 'Operational context \n' +
      'Telecom operators sit at the centre of digital ecosystems, where network behaviour directly affects financial services, platforms, and public systems.  \n' +
      'They face simultaneous pressure to reduce fraud, improve service quality, manage growing volumes of commercial and advertising traffic, and unlock new value from infrastructure data.',
    backgroundImage: '/img/sol-row-1.jpg',
    streams: [
      'Risk & Anti-Fraud Intelligence',
      'Netalytix — Data & Predictive Analytics',
      'Infrastructure Resilience Intelligence',
      'Telecom Intelligence & DPI',
      'CoS Analytics & Traffic Intelligence',
    ],
    outcomes: [
      'Earlier detection of fraud and signalling abuse',
      'Visibility into Cost of Service by traffic type and segment',
      'Optimised commercial and advertising traffic flows',
      'Privacy-safe audience monetisation',
      'Stronger positioning beyond basic connectivity',
    ],
  },
  {
    num: '/ 02 /',
    title: 'Public-Sector Institutions',
    bio: 'Operational context \n' +
      'Public digital services increasingly depend on commercial infrastructure, while accountability and systemic risk remain public responsibilities.',
    backgroundImage: '/img/sol-row-2.jpg',
    streams: [
      'Early identification of systemic digital risk',
      'Improved oversight across fragmented ecosystems',
      'Infrastructure-aware regulation and response',
      'Increased resilience of national digital services',
    ],
    outcomes: [
      'DI&ST Framework',
      'Behavioural & Identity Intelligence',
      'Lawful Interception & Regulated Access',
      'Telecom Intelligence & DPI',
      'Infrastructure Resilience Intelligence',
    ],
  },
  {
    num: '/ 03 /',
    title: 'Banks & Payment Service Providers',
    bio: 'Operational context \n' +
      'Financial fraud increasingly originates outside the financial perimeter — within telecom networks and digital platforms.',
    backgroundImage: '/img/sol-row-3.jpg',
    streams: [
      'Infrastructure-level Anti-Fraud Intelligence',
      'Behavioural & Identity Analytics',
      'Netalytix — Data & Predictive Analytics',
    ],
    outcomes: [
      'Pre-transaction fraud detection',
      'Reduced fraud losses with fewer false positives',
      'Better visibility into SIM-based and identity',
    ],
  },
  {
    num: '/ 04 /',
    title: 'Marketplaces & Platforms',
    bio: 'Operational context \n' +
      'Coordinated abuse and synthetic activity rarely appear as isolated accounts.',
    backgroundImage: '/img/sol-row-4.jpg',
    streams: [
      'Behavioural & Identity Intelligence',
      'Risk Modelling',
      'Predictive Analytics',
    ],
    outcomes: [
      'Earlier detection of organised abuse',
      'Improved trust and safety metrics',
      'Reduced operational cost of manual moderation',
    ],
  },
  {
    num: '/ 05 /',
    title: 'National & Critical Infrastructure',
    bio: 'Operational context \n' +
      'Infrastructure failures propagate rapidly across sectors.',
    backgroundImage: '/img/sol-row-5.jpg',
    streams: [
      'Infrastructure Resilience Intelligence',
      'Traffic & Behavioural Analytics',
      'Predictive & Scenario Modelling',
    ],
    outcomes: [
      'Improved continuity of critical services',
      'Reduced systemic impact of outages',
      'Data-driven resilience planning',
    ],
  },
]

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="page sol-hero section--dark" data-nav-theme="dark">
        <h1 className="sol-hero__heading">Solutions — By Vertical</h1>
      </section>

      {/* Verticals grid */}
      <section className="page section--light sol-verticals" data-nav-theme="dark">
        <div className="sol-verticals__grid">
          {verticals.map(({ num, title, bio, backgroundImage, streams, outcomes }) => (
            <div className="sol-row" key={title}>
              <SolRowCard num={num} title={title} bio={bio} backgroundImage={backgroundImage} />
              <div className="sol-row-lists">
                <SolItemList label="Streams used:" items={streams} className="sol-list-streams" />
                <SolItemList label="Outcomes:" items={outcomes} className="sol-list-outcomes" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer frameworks */}
      <section className="page section--dark sol-frameworks" data-nav-theme="dark">
        <div className="sol-frameworks__grid">
          <SolFw
            label="/ Get Started /"
            title="Engineering Briefing"
            description="A technical session covering architecture, data sources, analytical models, and integration."
          />
          <SolFwCard
            title="Closed Access"
            description="Access to regulated and sensitive capabilities for authorised organisations."
            button="Request"
          />
          <SolFwCard
            title="DI&ST Framework"
            description="Access to regulated and sensitive capabilities for authorised organisations."
            button="Overview"
          />
        </div>
      </section>

      <ContactsSection />
    </>
  )
}
