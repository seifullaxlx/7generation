import '../../public/styles/pages/services.css'
import BlockSection from '../components/BlockSection'

export default function Services() {
  return (
    <>
      <BlockSection theme="hero" navTheme="dark" heading="Services" headingLevel={1}>
        <p className="block__body">A full spectrum of digital services built for impact at institutional scale.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Offerings" heading="What We Do">
        <ul className="block__list">
          <li className="block__list-item">Strategic Consulting</li>
          <li className="block__list-item">System Architecture & Engineering</li>
          <li className="block__list-item">Data Platform Development</li>
          <li className="block__list-item">ESG Compliance Automation</li>
        </ul>
      </BlockSection>

      <BlockSection theme="dark" navTheme="dark" label="Process" heading="How We Work">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Engagement" heading="Start a Project">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>
    </>
  )
}
