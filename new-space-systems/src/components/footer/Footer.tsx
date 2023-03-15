import "./footer.css";

import LinkedIn from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'
import CrunchBase from '../../assets/crunch-base.svg'
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg'

function Footer() {
  return <div className="footer">
    <h3>Follow us:</h3>
    <div className="social-icons">
      <a className="icon" href='https://twitter.com/fewforms' target='_blank'>
        <img src={Twitter} alt="twitter-logo" />
      </a>
      <a className="icon" href='https://www.linkedin.com/company/few-products/' target='_blank'>
        <img src={LinkedIn} alt="linked-in-logo" />
      </a>

      <a className="icon" href='https://www.crunchbase.com/organization/few/' target='_blank'>
        <img src={CrunchBase} alt="crunch-base-logo" />
      </a>
      <a className="icon" href='https://www.instagram.com/fewforms/' target='_blank'>
        <img src={Instagram} alt="instagram-logo" />
      </a>
      <a className="icon" href='https://www.facebook.com/fewforms' target='_blank'>
        <img src={Facebook} alt="facebook-logo" />
      </a>
    </div>
    <p className="copyright">© 2023 | few.</p>
  </div>;
}

export default Footer;
