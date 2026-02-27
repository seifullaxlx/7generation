export default function Why7gItem({ icon, title, description }) {
  return (
    <li className="home-why7g__item">
      <div className="home-why7g__icon">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
