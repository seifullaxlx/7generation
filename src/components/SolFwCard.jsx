export default function SolFwCard({ title, description, button }) {
  return (
    <div className="sol-fw-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {button && <button>{button}</button>}
    </div>
  )
}
