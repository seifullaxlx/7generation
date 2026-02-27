import '../../public/styles/pages/contact.css'
import ContactCatCard from '../components/ContactCatCard'

const categories = [
  {
    title: 'Telecom Integration',
    desc: 'For telecom operators, infrastructure providers, and technology partners supporting network integration, data access, and deployment.',
  },
  {
    title: 'Government & Regulation',
    desc: 'For public-sector institutions, regulators, and authorities regarding lawful interception, regulatory, and infrastructure-wide engagements.',
  },
  {
    title: 'ESG Partnerships',
    desc: 'For organisations, initiatives, and partners interested in ESG-driven collaboration, responsible technology, and digital infrastructure.',
  },
  {
    title: 'Research',
    desc: 'For academic institutions, researchers, and technology initiatives related to joint research, technology development, and academic access.',
  },
  {
    title: 'Press',
    desc: 'For media inquiries, interviews, and official statements.',
  },
  {
    title: 'General Inquiries',
    desc: 'If you are unsure which category applies to your request.',
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="page contact-hero section--dark" data-nav-theme="dark">
        <div className="contact-hero__inner">
          <div className="contact-hero__left">
            <h1 className="contact-hero__heading">Contact<br />7Generation</h1>
          </div>
          <div className="contact-hero__right">
            <p>If you are looking to engage with 7Generation, please select the most relevant area below. This helps us route your request to the right team.</p>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="page section--light contact-categories" data-nav-theme="light">
        <div className="contact-categories__grid">
          {categories.map(({ title, desc }) => (
            <ContactCatCard key={title} title={title} desc={desc} />
          ))}
        </div>
      </section>
    </>
  )
}
