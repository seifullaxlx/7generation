export default function BlockSection({ theme = 'light', navTheme, label, heading, headingLevel = 2, children }) {
  const Tag = `h${headingLevel}`
  return (
    <section className={`page section--${theme}`} data-nav-theme={navTheme}>
      <div className="page-grid">
        <div className="block">
          {label && <span className="block__label">{label}</span>}
          <Tag className="block__heading">{heading}</Tag>
        </div>
        <div className="block">
          {children}
        </div>
      </div>
    </section>
  )
}
