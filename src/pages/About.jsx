import '../../public/styles/pages/about.css'
import BlockSection from '../components/BlockSection'

export default function About() {
  return (
    <>
      <BlockSection theme="hero" navTheme="dark" heading="About" headingLevel={1}>
        <p className="block__body">Our mission, values and the principles that define how we work.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Mission" heading="Why We Exist">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>

      <BlockSection theme="dark" navTheme="dark" label="Core Values" heading="What Guides Us">
        <ul className="block__list">
          <li className="block__list-item">Sustainability over short-term gain</li>
          <li className="block__list-item">Radical transparency</li>
          <li className="block__list-item">Long-term systems thinking</li>
          <li className="block__list-item">Community before corporation</li>
        </ul>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="History" heading="Where We Come From">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>
    </>
  )
}
