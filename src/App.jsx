
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {

  return (
    <>
    <section className='head-section'>
      <nav className='head-nav'>
        <img className='logo' src='/images/logo.svg'></img>
        <div className='nav-items'>
          <a>Features</a>
          <a>Team</a>
          <a>Sign In</a>
        </div>
      </nav>
      <div className='head-content'>
        <img className='head-img' src='/images/illustration-intro.png'></img>
        <h1 className='head-title'>All your files in one secure location, accessible anywhere.</h1>
        <p className='head-text'>
          Fylo stores all your most important files in one secure location. Access them wherever 
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <button className='head-btn'>Get Started</button>
      </div>
    </section>
    <section className='benefits'>
      <div className='benefit-item'>
        <img className='benefit-img' src='/images/icon-access-anywhere.svg'></img>
        <h2 className='benefit-title'>Access your files, anywhere</h2>
        <p className='benefit-text'>
          The ability to use a smartphone, tablet, or computer to access your account means your 
          files follow you everywhere.
        </p>
      </div>
      <div className='benefit-item'>
        <img className='benefit-img' src='/images/icon-security.svg'></img>
        <h2 className='benefit-title'>Security you can trust</h2>
        <p className='benefit-text'>
          2-factor authentication and user-controlled encryption are just a couple of the security 
          features we allow to help secure your files.
        </p>
      </div>
      <div className='benefit-item'>
        <img className='benefit-img' src='/images/icon-collaboration.svg'></img>
        <h2 className='benefit-title'>Real-time collaboration</h2>
        <p className='benefit-text'>
          Securely share files and folders with friends, family and colleagues for live collaboration. 
          No email attachments required.
        </p>
      </div>
      <div className='benefit-item'>
        <img className='benefit-img' src='/images/icon-any-file.svg'></img>
        <h2 className='benefit-title'>Store any type of file</h2>
        <p className='benefit-text'>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
          file types to be securely stored and shared.
        </p>
      </div>
    </section>
    <section className='productive-banner'>
      <img className='productive-img' src='/images/illustration-stay-productive.png'></img>
      <div className='productive-content'>
        <h1 className='productive-title'>Stay productive, wherever you are</h1>
        <p className='productive-text'>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
          storage needs.
        </p>
        <p className='productive-text'>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email 
          attachments required.
        </p>
        <div className='productive-link-container'>
          <a className='productive-link'>See how Fylo works</a>
          <img className='productive-link-icon' src='/images/icon-arrow.svg'></img>
        </div>
      </div>
    </section>
    <section className='reviews'>
      <div className='review-item'>
        <p className='review-text'>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
        </p>
        <div className='review-creds'>
          <img className='review-avatar' src='/images/profile-1.jpg'></img>
          <div className='review-creds-text'>
            <p className='revew-creds-name'>Satish Patel</p>
            <p className='revew-creds-occupation'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <p className='review-text'>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
        </p>
        <div className='review-creds'>
          <img className='review-avatar' src='/images/profile-2.jpg'></img>
          <div className='review-creds-text'>
            <p className='revew-creds-name'>Bruce McKenzie</p>
            <p className='revew-creds-occupation'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <p className='review-text'>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
        </p>
        <div className='review-creds'>
          <img className='review-avatar' src='/images/profile-3.jpg'></img>
          <div className='review-creds-text'>
            <p className='revew-creds-name'>Iva Boyd</p>
            <p className='revew-creds-occupation'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </section>
    <section className='promo'>
      <h1 className='promo-title'>Get early access today</h1>
      <p className='promo-text'>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
        questions, our support team would be happy to help you.
      </p>
      <div className='promo-input-container'>
        <input type='text' placeholder='email@example.com' className='promo-input' />
        <button className='promo-btn'>Get Started For Free</button>
      </div>
    </section>
    <section className='foot-section'>
      <img className='foot-logo' src='/images/logo.svg'></img>
      <div className='foot-content'>
        <div className='location'>
          <img className='location-logo' src='/images/icon-location.svg'></img>
          <p className='location-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua
          </p>
        </div>
        <div className='contacts'>
          <div className='contacts-phone'>
            <img className='phone-logo' src='/images/icon-phone.svg'></img>
            <p className='phone-text'>+1-543-123-4567</p>
          </div>
          <div className='contacts-email'>
            <img className='email-logo' src='/images/icon-email.svg'></img>
            <p className='email-text'>example@fylo.com</p>
          </div>
        </div>
        <div className='links'>
          <a>About Us</a>
          <a>Contact Us</a>
          <a>Jobs</a>
          <a>Terms</a>
          <a>Press</a>
          <a>Privacy</a>
          <a>Blog</a>
        </div>
        <div className='socials'>
          <div className='social-container'>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className='social-container'>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className='social-container'>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </section>
  <footer>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
    </p>
  </footer>
    </>
  )
}

export default App
