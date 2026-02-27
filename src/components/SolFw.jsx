export default function SolFw({ label, title, description }) {
  return (
    <div className="sol-fw">
      {label && <span>{label}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
