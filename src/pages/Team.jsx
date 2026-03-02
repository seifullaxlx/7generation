import '../../public/styles/pages/team.css'
import TeamCard from '../components/TeamCard'
import ContactsSection from "../components/ContactsSection.jsx";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="page team-hero">
        <h1 className="team-hero__heading">LEADERSHIP<br />&amp; TEAM</h1>
      </section>

      {/* Members */}
      <section className="page section--light team-members" data-nav-theme="dark">
        <div className="team-members__grid">
          <TeamCard
            name="Dauren Tulebayev"
            role="Founder & CEO, 7Generation"
            bio="Dauren defines the strategic direction of 7Generation and its development as a technology holding. His focus is building an ecosystem where engineering teams, products, and R&D operate as a unified system - aligned with long-term technological sustainability and real-world applicability."
            photo="/img/member-photo.png"
          />
          <TeamCard
            name="Kakhar Kashimov"
            role="Co-Founder & CTO, Head of R&D"
            bio={<>Kakhar leads technological architecture, research, and engineering development. With over 22 years of experience in software engineering, Big Data, and high-load systems, his role is to translate advanced technologies into reliable, production-grade infrastructure solutions. Education: Advanced Machine Learning, Imperial College London.Our ecosystem brings together more than 800 professionals, including software engineers, infrastructure and network engineers, R&D specialists, data scientists, and machine learning experts.<br /><br />This multidisciplinary team enables us to design, build, and operate complex infrastructure-level systems entirely in-house — from research and architecture to deployment and long-term operation.</>}
          />
        </div>
      </section>

        <ContactsSection />
    </>
  )
}
