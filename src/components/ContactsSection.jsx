export default function ContactsSection() {
  return (
    <section className="page section--light contacts-section" data-nav-theme="light">
      <div className="footer">
        <span className="contacts-tag">/ Contact us /</span>
        <div>
          <h2 className="contacts-heading">Contacts</h2>
          <div className="footer-main">
            <div>
              <p className="contacts-label">/ Number /</p>
              <p className="contacts-value">+7 (708) 144 74 21</p>
            </div>
            <div>
              <p className="contacts-label">E-mail /</p>
              <a href="mailto:7gen@gmail.com" className="contacts-value">sales@7g.team</a>
            </div>
            <div className="contacts-nav">
              <p className="contacts-label">/ Navigation /</p>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/dist">DIST</a></li>
                <li><a href="/solutions">Solutions</a></li>
                <li><a href="/company">Company</a></li>
                <li><a href="/esg">ESG</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/careers">Why7G</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/video-intelligence">Video Intelligence</a></li>
              </ul>
            </div>
            <div>
              <p className="contacts-label">/ Address /</p>
              <p className="contacts-value">Astana, Bauyrzhan Momyshuly Avenue 2/1</p>
            </div>
          </div>
        </div>
        <div className="contacts-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.801289876785!2d71.45685797757677!3d51.13057323816066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424583feebdc73e9%3A0x6d40297638471161!2sBauyrzhan%20Momyshuly%20Ave%202%2F1%2C%20Astana%20010000%2C%20Kazakhstan!5e0!3m2!1sen!2sus!4v1772154803884!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Office location"
          />
        </div>
      </div>
    </section>
  )
}
