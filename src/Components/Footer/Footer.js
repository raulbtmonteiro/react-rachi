
import './Footer.css';

function Footer(props) {
  return (
    <div className="footer-wrapper">
      <h6 className='footer-info'>{props.title}</h6>
    </div>
  );
}

export default Footer;
