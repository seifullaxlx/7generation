import '../../public/styles/pages/video-intelligence.css'

export default function VideoIntelligence() {
  return (
    <>
      <section className="page section--hero" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <h1 className="block__heading">Video Intelligence</h1>
          </div>
          <div className="block">
            <p className="block__body">Real-time video analysis and computer vision for public safety and smart city infrastructure.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Technology</span>
            <h2 className="block__heading">Computer Vision at Scale</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--dark" data-nav-theme="dark">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Use Cases</span>
            <h2 className="block__heading">Where It Applies</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>

      <section className="page section--light" data-nav-theme="light">
        <div className="page-grid">
          <div className="block">
            <span className="block__label">Privacy</span>
            <h2 className="block__heading">Ethical by Design</h2>
          </div>
          <div className="block">
            <p className="block__body">Placeholder content.</p>
          </div>
        </div>
      </section>
    </>
  )
}
