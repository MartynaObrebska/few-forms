import People from '../../assets/people.webp'
import Bartek from '../../assets/Bartek.webp'
import LinkedIn from '../../assets/linkedin.svg'
import Mail from '../../assets/Mail.svg'
import './LetsGetInTouch.css'

const LetsGetInTouch = (props: { letsGetInTouchRef: React.MutableRefObject<HTMLDivElement | null> }) => {
  return <div ref={props.letsGetInTouchRef} className="lets-get-in-touch">
    <div className="image-container">
      <img src={People} alt="people-working-together" />
    </div>
    <div className="text-section-container">
      <div className="text-section">
        <h2>Sound interesting?<br />Let’s get in touch!</h2>
        <p>We are digital furniture brand, rethinking the way we design, buy and use furniture. We are digital furniture.</p>
        <div className='ceo-section'>
          <div className="ceo-image-container"><img src={Bartek} alt="profile-picture-of-Bartosz-Bykowski" /></div>
          <div className="ceo-information">
            <div className="ceo-name">Bartosz Bykowski</div>
            <div className="ceo-title">Founder</div>
            <div className="social-icons">
              <a className="linked-in" href='https://www.linkedin.com/company/few-products/' target='_blank'>
                <img src={LinkedIn} alt="linked-in-logo" />
              </a>
            </div>
          </div>
        </div>
        <a className="send-message" href="mailto:takeme@there.com" target="_blank">
          <img src={Mail} alt="mail-icon" />
          Send a message
        </a>
      </div>
    </div>
  </div >
}

export default LetsGetInTouch