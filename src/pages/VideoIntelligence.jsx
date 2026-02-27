import '../../public/styles/pages/video-intelligence.css'
import BlockSection from '../components/BlockSection'

export default function VideoIntelligence() {
  return (
    <>
      <BlockSection theme="hero" navTheme="dark" heading="Video Intelligence" headingLevel={1}>
        <p className="block__body">Real-time video analysis and computer vision for public safety and smart city infrastructure.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Technology" heading="Computer Vision at Scale">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>

      <BlockSection theme="dark" navTheme="dark" label="Use Cases" heading="Where It Applies">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>

      <BlockSection theme="light" navTheme="light" label="Privacy" heading="Ethical by Design">
        <p className="block__body">Placeholder content.</p>
      </BlockSection>
    </>
  )
}
