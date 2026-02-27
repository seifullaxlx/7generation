import '../../public/styles/pages/team.css'

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="page team-hero section--dark" data-nav-theme="dark">
        <h1 className="team-hero__heading">LEADERSHIP<br />& TEAM</h1>
      </section>

      {/* Members */}
      <section className="page section--dark team-members" data-nav-theme="dark">
        <div className="team-members__grid">

          <div className="team-card">
            <div className="team-card__photo-wrap">
              <div className="team-card__photo team-card__photo--dauren" />
            </div>
            <div className="team-card__body">
              <span className="team-card__label">Leadership & Team /</span>
              <h2 className="team-card__name">Dauren Tulebayev</h2>
              <p className="team-card__role">Founder & CEO</p>
              <p className="team-card__bio">Dauren defines the strategic direction of 7Generation and its development as a technology holding. He has a background in engineering, product architecture and enterprise systems — combining analytical and deep industry experience.</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-card__photo-wrap">
              <div className="team-card__photo team-card__photo--kakher" />
            </div>
            <div className="team-card__body">
              <span className="team-card__label">Leadership & Team /</span>
              <h2 className="team-card__name">Kakher Kashimov</h2>
              <p className="team-card__role">CTO</p>
              <p className="team-card__bio">Kakher leads the technical architecture and engineering teams. With over a decade in telecom software development, he specialises in high-load distributed systems, DPI platforms and real-time analytics infrastructure designed to operate at carrier scale.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
