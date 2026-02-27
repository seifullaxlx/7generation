import '../../public/styles/pages/esg.css'
import IconListItem from '../components/IconListItem'
import ContactsSection from "../components/ContactsSection.jsx";

const foundationSteps = [
  { icon: '/public/img/home-icons/global-network 1.svg', text: 'Receiving devices from donors and partners' },
  { icon: '/public/img/home-icons/global-network 2.svg', text: 'Diagnostics, repair and complete data wiping' },
  { icon: '/public/img/home-icons/global-network 3.svg', text: 'Equipment setup (headset, backpack, learning materials)' },
  { icon: '/public/img/home-icons/global-network 7.svg', text: 'Coordination with schools and beneficiary lists' },
  { icon: '/public/img/home-icons/global-network 11.svg', text: 'Delivery of fully prepared devices' },
  { icon: '/public/img/home-icons/global-network 12.svg', text: 'Official handover to the child with documentation' },
]

const thirdSectionStats = [
  { num: '/ 01 /', value: '626', desc: '626 laptops delivered to children' },
  { num: '/ 02 /', value: '₸20', desc: '₸20 million raised for project development' },
  { num: '/ 03 /', value: '196,100', desc: '196,100 rural children still need laptops' },
  { num: '/ 04 /', value: '700,000', desc: 'Approximately 700,000 children across Kazakhstan lack access to devices' },
]

const livesignalStats = [
  { number: '1.8', desc: '1.8 million emergency incidents per year' },
  { number: '22', desc: '22 million emergency calls in households in 2022' },
  { number: '60,415', desc: '60,415 cases where location accuracy is critical' },
]

export default function ESG() {
  return (
    <>
      <section className="page section--hero page--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">ESG &amp; PUBLIC <br />SAFETY PROJECTS</h1>
            <p className="block__heading__p">An engineering approach to real social challenges 7Generation is a technology company that designs complex digital systems for business and public-sector institutions.</p>
          </div>
          <div className="block">
            <p className="block__body">
              The same engineering mindset we
              apply beyond commercial platforms - in social,
              educational and public infrastructure.
              For us, ESG is not a separate initiative. It
              is a continuation of engineering responsibility - using technology,
              data and processes where they create real impact. <br />
              We develop projects that:
              <ul className="block__list">
                <li>expand access to education and technology</li>
                <li>reduce digital environment risks</li>
                <li>improve public safety</li>
                <li>use IT as a tool for systemic, measurable change</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="page section--light">
        <div className="page-grid">
          <div className="second-section-title">
            <span>/ "+1" Foundation /</span>
            <h1>"+1" Foundation</h1>
            <p>Access to technology is access to the future</p>
          </div>
          <div className="second-section-body">
            <p>How the project works</p>
            <ul>
              {foundationSteps.map(({ icon, text }) => (
                <IconListItem key={text} icon={icon} text={text} />
              ))}
            </ul>
          </div>
          <div className="second-section-desc">
            <p>The +1 Foundation is a 7Generation social initiative that provides laptops to children from rural and socially vulnerable families for education and development.
              We approach philanthropy the same way we approach technology projects: with transparency, quality control and responsibility for results.</p>
          </div>
        </div>
      </section>

      <section className="page third-section">
        <div className="page-grid">
          <div className="third-section-list">
            <ul>
              {thirdSectionStats.map(({ num, value, desc }) => (
                <li key={num}>
                  <div className="divider" />
                  <span>{num}</span>
                  <h3>{value}</h3>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="third-section-info">
            <span>/ Philosophy /</span>
            <h1>By giving a laptop, we provide a tool that can change a child's educational and life trajectory.</h1>
            <button>Support the project</button>
          </div>
        </div>
      </section>

      {/* LiveSignal section */}
      <section className="page section--light livesignal" >
        <div className="livesignal-inner">
          <div className="livesignal-card">
            <span>/ LiveSignal /</span>
            <h2>LiveSignal</h2>
            <p>LiveSignal is a technology service that automatically<br />
              determines a caller’s location during emergency calls.<br />
              <br />
              The solution is critical in situations where a person:
            </p>
            <div className="livesignal-card-list">
              <p>
                • is in shock<br />
                • cannot speak or loses consciousness<br />
                • is unable to explain their location, including children<br />
              </p>
            </div>
            <p>The project directly improves public safety and emergency response efficiency.</p>
            <button>Learn more about the technology</button>
          </div>
          <div className="livesignal-capabilities">
            <p style={{ marginBottom: '20px'}}>Key capabilities</p>
            <IconListItem icon="/public/img/location.svg" text="automatic location detection during emergency calls" />
            <IconListItem icon="/public/img/emergency.svg" text="faster emergency response" />
            <IconListItem icon="/public/img/critical-error.svg" text="reduced risk of critical errors" />

            <div className="livesignal-nums">
              <div className="livesignal-num-item">
                <h3>1.8</h3>
                <p>1.8 million emergency incidents per year</p>
              </div>

              <div className="livesignal-num-item">
                <h3>22</h3>
                <p>22 million emergency calls in Kazakhstan in 2023</p>
              </div>

              <div className="livesignal-num-item">
                <h3>60,415</h3>
                <p>60,415 cases where location accuracy is critical</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts section */}
      <ContactsSection />
    </>
  )
}
