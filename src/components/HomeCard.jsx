export default function HomeCard({ num, title, children }) {
  return (
    <div className="home-card">
      <span>{num}</span>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
