export default function SolRowCard({ num, title, bio, backgroundImage }) {
  return (
    <div className="sol-row-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span>{num}</span>
      <h3>{title}</h3>
      <p>{bio}</p>
    </div>
  )
}
