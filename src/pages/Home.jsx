import '../../public/styles/pages/home.css'

export default function Home() {
  return (
    <>
      <section className="page section--hero page--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">ESG & PUBLIC <br />SAFETY PROJECTS</h1>
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
            <span>/ “+1” Foundation /</span>
            <h1>”+1” Foundation</h1>
            <p>Access to technology is access to the future</p>
          </div>
          <div className="second-section-body">
            <p>How the project works</p>
            <ul>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/global-network 1.svg" alt=""/>
                </div>
                <p>Receiving devices from donors and partners</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/global-network 2.svg" alt=""/>
                </div>
                <p>Diagnostics, repair and complete data wiping</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/global-network 3.svg" alt=""/>
                </div>
                <p>Equipment setup (headset, backpack, learning materials)</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/global-network 7.svg" alt=""/>
                </div>
                <p>Coordination with schools and beneficiary lists</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/global-network 11.svg" alt=""/>
                </div>
                <p>Delivery of fully prepared devices</p>
              </li>
              <li>
                <div className="li-icon">
                  <img src="/public/img/home-icons/global-network 12.svg" alt=""/>
                </div>
                <p>Official handover to the child with documentation</p>
              </li>
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
              <li>
                <div className="divider" />
                <span>/ 01 /</span>
                <h3>626</h3>
                <p>626 laptops delivered to children</p>
              </li>
              <li>
                <div className="divider" />
                <span>/ 02 /</span>
                <h3>₸20</h3>
                <p>₸20 million raised for project development</p>
              </li>
              <li>
                <div className="divider" />
                <span>/ 03 /</span>
                <h3>196,100</h3>
                <p>196,100 rural children still need laptops</p>
              </li>
              <li>
                <div className="divider" />
                <span>/ 04 /</span>
                <h3>700,000</h3>
                <p>Approximately 700,000 children across Kazakhstan lack access to devices</p>
              </li>
            </ul>
          </div>
          <div className="third-section-info">
            <span>/ Philosophy /</span>
            <h1>By giving a laptop, we provide a tool that can change a child’s educational and life trajectory.</h1>
            <button>Support the project</button>
          </div>
        </div>
      </section>
    </>
  )
}
