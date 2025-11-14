import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-content">
            <div className="footer-logo-container">
              <a href="/" className="footer-logo-link">
                <img
                  className="footer-logo"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53bf1e8fb790809dd810461c96a81112da4421fd?width=150"
                  alt="Pursuit OCR"
                />
              </a>
            </div>
            <div className="footer-nav-margin">
              <div className="footer-nav-wrapper">
                <nav className="footer-nav-container">
                  <ul className="footer-nav-list">
                    <li><a href="#about" className="footer-nav-link">About</a></li>
                    <li><a href="#tickets" className="footer-nav-link">Tickets</a></li>
                    <li><a href="#faq" className="footer-nav-link">FAQ</a></li>
                    <li><a href="#contact" className="footer-nav-link">Contact</a></li>
                    <li><a href="#privacy" className="footer-nav-link">Privacy Policy</a></li>
                    <li><a href="#terms" className="footer-nav-link">Terms and Conditions</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
