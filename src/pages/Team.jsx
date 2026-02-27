import '../../public/styles/pages/team.css'
import TeamCard from '../components/TeamCard'

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="page team-hero section--dark" data-nav-theme="dark">
        <h1 className="team-hero__heading">LEADERSHIP<br />&amp; TEAM</h1>
      </section>

      {/* Members */}
      <section className="page section--dark team-members" data-nav-theme="dark">
        <div className="team-members__grid">
          <TeamCard
            name="Dauren Tulebayev"
            role="Founder & CEO"
            bio="Dauren defines the strategic direction of 7Generation and its development as a technology holding. He has a background in engineering, product architecture and enterprise systems — combining analytical and deep industry experience."
            photoClass="team-card__photo--dauren"
          />
          <TeamCard
            name="Kakher Kashimov"
            role="CTO"
            bio="Kakher leads the technical architecture and engineering teams. With over a decade in telecom software development, he specialises in high-load distributed systems, DPI platforms and real-time analytics infrastructure designed to operate at carrier scale."
            photoClass="team-card__photo--kakher"
          />
        </div>
      </section>
    </>
  )
}
