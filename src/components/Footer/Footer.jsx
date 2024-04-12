import './footer.css'

const Footer = () => {
  return (
    <footer className='black'>
      <div className="wrapper">
        <div className="footer-container">

          <div className="footer-contents">
              <div className="social-media">
                <p>Sound<span className='red'>DZign</span></p>
                <div className="social-media-icons">
                  <img src="../../src/assets/facebook.svg" alt="facebook" />
                  <img src="../../src/assets/twitter.svg" alt="twitter" />
                  <img src="../../src/assets/instagram.svg" alt="instagram" />
                </div>
              </div>

              <div className="quick-links">
                <p className="link-title">Quick Links</p>
                <ul className="links">
                  <a href="#"><li>Blog</li></a>
                  <a href="#"><li>Privacy Policy</li></a>
                </ul>
              </div>

              <div className="contacts">
                <p className="contact-title">Contacts us</p>
                <ul className="contact-info">
                  <li>contact@gmail.com</li>
                  <li>+0123456789</li>
                </ul>
              </div>
          </div>

          <div className="footer-text">
            <p>This website is designed by JSCoding &copy; 2024</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
