export default function TeamCard({ name, role, bio, photoClass }) {
  return (
    <div className="team-card">
      <div className="team-card__photo-wrap">
        <div className={`team-card__photo ${photoClass}`} />
      </div>
      <div className="team-card__body">
        <span className="team-card__label">Leadership & Team /</span>
        <h2 className="team-card__name">{name}</h2>
        <p className="team-card__role">{role}</p>
        <p className="team-card__bio">{bio}</p>
      </div>
    </div>
  )
}
