import { useLeadForm } from '../context/LeadFormContext'


export default function ContactCatCard({ title, desc, button = 'Contact' }) {
  const { openLeadForm } = useLeadForm()

  return (
    <div className="contact-cat-card">
      <h3 className="contact-cat-card__title">{title}</h3>
      <p className="contact-cat-card__desc">{desc}</p>
      <button className="contact-cat-card__btn" onClick={() => openLeadForm('hero-cta')}>{button}</button>
    </div>
  )
}
