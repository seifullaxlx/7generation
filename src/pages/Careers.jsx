import '../../public/styles/pages/careers.css'

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="page car-hero section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div>
            <h1 className="car-hero__heading">CAREERS</h1>
            <p className="car-hero__sub">Build infrastructure that matters. 7Generation is a deep-tech company working at the intersection of telecom intelligence, data analytics, and public safety.</p>
          </div>
          <div className="car-hero__right">
            <p>We hire engineers, analysts, and builders who want to work on systems that operate at scale and create measurable impact.</p>
          </div>
        </div>
      </section>

      {/* Why + DNA */}
      <section className="page section--dark car-why" data-nav-theme="dark">
        <div className="car-why__inner">
          <div className="car-why__left">
            <h2 className="car-why__heading">Why 7Generation</h2>
            <ul className="car-why__list">
              <li>Work on production-grade systems used by telecom operators and government institutions</li>
              <li>Collaborate with engineers who treat infrastructure as a long-term responsibility</li>
              <li>Contribute to projects that directly improve public safety and digital integrity</li>
            </ul>
          </div>
          <div className="car-dna-card">
            <span className="car-label">Our DNA /</span>
            <p>We are an engineering company first. Everything we ship is measured, documented and maintained. We value depth over breadth, ownership over coverage, and outcomes over output.</p>
            <p>We don't move fast and break things. We build things that last.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page section--light car-values" data-nav-theme="light">
        <h2 className="car-values__heading">Our Values</h2>
        <div className="car-values__grid">
          <div className="car-value-card">
            <h3>Engineering Rigour</h3>
            <p>We hold our systems to the standard of infrastructure — not prototypes. Correctness, observability and fault tolerance are baseline requirements.</p>
          </div>
          <div className="car-value-card">
            <h3>Long-term Ownership</h3>
            <p>We build with the expectation that we will maintain it. Documentation, test coverage and operational clarity are part of the work.</p>
          </div>
          <div className="car-value-card">
            <h3>Honest Communication</h3>
            <p>We share problems early. There are no status meetings designed to look good — only direct conversations about what is working and what is not.</p>
          </div>
          <div className="car-value-card">
            <h3>Impact over Volume</h3>
            <p>We are not optimising for ticket throughput. Every decision is evaluated by whether it moves the product or the platform forward in a meaningful way.</p>
          </div>
        </div>
      </section>

      {/* Inside 7Generation */}
      <section className="page section--dark car-inside" data-nav-theme="dark">
        <h2 className="car-inside__heading">Inside 7Generation</h2>
        <div className="car-inside__grid">
          {[
            'Training reports and professional development',
            'Hackly office initiatives',
            'Language courses and training',
            'Welcome for new employees',
            'Time and health insurance programs',
            'Remote — working days',
            'Fitness — training available',
            'Equipment and working space',
            'Annual and sick leave considered',
          ].map(item => (
            <div className="car-inside-card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
