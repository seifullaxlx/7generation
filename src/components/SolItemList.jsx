export default function SolItemList({ label, items, className }) {
  return (
    <div className={className}>
      {label && <p>{label}</p>}
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
