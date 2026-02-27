import '../../public/styles/pages/portfolio.css'
import BlockSection from '../components/BlockSection'

export default function Portfolio() {
  return (
    <>
      <BlockSection theme="hero" navTheme="dark" heading="Portfolio" headingLevel={1}>
        <p className="block__body">Selected projects where technology met real social and institutional need.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Selected Work" heading="Projects That Last">
        <ul className="block__list">
          <li className="block__list-item">01 — Arboreal / Reforestation Initiative</li>
          <li className="block__list-item">02 — Tide Mark / Ocean Data Platform</li>
          <li className="block__list-item">03 — Roots & Routes / Community Mobility</li>
          <li className="block__list-item">04 — SolarWeave / Textile Energy Harvest</li>
        </ul>
      </BlockSection>

      <BlockSection theme="dark" navTheme="dark" label="Sectors" heading="Where We've Worked">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Next" heading="Start a Project">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>
    </>
  )
}
