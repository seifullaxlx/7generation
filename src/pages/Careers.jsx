import '../../public/styles/pages/careers.css'
import IconListItem from "../components/IconListItem.jsx";

const whyItems = [
  { icon: '/public/img/infra.svg', text: 'Infrastructure-scale data' },
  { icon: '/public/img/prod.svg', text: 'Real production environments' },
  { icon: '/public/img/home-icons/blockchain.svg', text: 'Problems that cannot be solved with generic tools' },
]

const valuesItems = [
  { icon: '/public/img/energy.svg', text: 'We build teams of energetic, talented, and decisive people' },
  { icon: '/public/img/people.svg', text: 'We prioritise people when building the organisation' },
  { icon: '/public/img/impact.svg', text: 'We choose projects that create meaningful impact' },
]

const insideItems = [
  { icon: '/public/img/analytics.svg', text: 'Financial support in key life moments' },
  { icon: '/public/img/meal.svg', text: 'Daily office breakfasts' },
  { icon: '/public/img/translate.svg', text: 'Language courses during work hours' },
  { icon: '/public/img/box.svg', text: 'Welcome Box for new team members' },
  { icon: '/public/img/health.svg', text: 'Fitness and health compensation' },
  { icon: '/public/img/international.svg', text: 'Participation in international conferences' },
  { icon: '/public/img/coin.svg', text: 'Dreamcoin — internal reward currency' },
  { icon: '/public/img/sports.svg', text: 'Sports and corporate events' },
]

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="page car-hero">
        <div className="page-grid">
          <div>
            <h1 className="car-hero__heading">CAREERS</h1>
          </div>
        </div>
      </section>

      {/* Why + DNA */}
      <section className="page section--light car-why" data-nav-theme="dark">
        <div className="car-why__inner">
          <div className="car-why__left">
            <span>/ Why /</span>
            <h2 className="car-why__heading">Why 7Generation</h2>
            <p>Working at 7Generation means building systems that operate below<br />
              the application layer — where correctness, stability, and integrity<br />
              matter most. You will work on:
            </p>
            <ul className="car-why__list">
              {whyItems.map(({ icon, text }) => (
                <IconListItem icon={icon} text={text} />
              ))}
            </ul>
          </div>
          <div className="car-dna-card">
            <span>/ Why/</span>
            <h4>Our DNA</h4>
            <p>
              The team is united by interest in complex problems and a commitment to precision. Ideas here move from hypothesis to working systems — and only then into production environments.
              <br />
              <br />
              Engineering courage is measured not by ambition, but by reliability of implementation.
            </p>
            <button>Vacancies</button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page section--light car-values" data-nav-theme="light">
        <span>/ Values /</span>
        <h2 className="car-values__heading">Our Values</h2>
        <div className="car-values__grid">
          {valuesItems.map(({ icon, text }) => (
            <div className="car-values__item" key={text}>
              <div className="car-values-icon">
                <img src={icon} alt="" />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inside 7Generation */}
      <section className="page section--dark car-inside" data-nav-theme="dark">
        <div className="car-inside__heading">
          <span>/ Benefits /</span>
          <h2>Inside 7Generation</h2>
          <p>We create conditions that allow engineers and<br /> researchers to focus on quality and growth.</p>
        </div>
        <div className="car-inside__grid">
          {insideItems.map(({ icon, text }, index) => (
            <div className="car-inside-card" key={index}>
              <div className="car-inside-card-icon">
                <img src={icon} alt="#"/>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
