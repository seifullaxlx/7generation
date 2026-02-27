export default function IconListItem({ icon, text, alt = '' }) {
  return (
    <li>
      <div className="li-icon">
        <img src={icon} alt={alt} />
      </div>
      <p>{text}</p>
    </li>
  )
}
