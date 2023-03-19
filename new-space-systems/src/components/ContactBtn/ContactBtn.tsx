import './contactBtn.css'

interface Props {
  handleClick?: () => void;
}
const ContactBtn = (props: Props) => {
  return <button className="contact-button" onClick={props.handleClick}>
    <div>Contact us</div>
  </button>
}

export default ContactBtn