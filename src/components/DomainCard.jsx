export default function DomainCard({ num, title, description, active }) {
  return (
    <div className={`home-domain-card${active ? ' home-domain-card--active' : ''}`}>
      <span className="home-domain-card__num">{num}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
