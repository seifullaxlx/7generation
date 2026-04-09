import { useLeadForm } from '../context/LeadFormContext'


export default function SolFwCard({ title, description, button }) {
  const { openLeadForm } = useLeadForm()

  return (
    <div className="sol-fw-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {button && <button onClick={() => openLeadForm('solutions-cta')}>{button}</button>}
    </div>
  )
}
