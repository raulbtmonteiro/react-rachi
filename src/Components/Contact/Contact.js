
import './Contact.css';

function Contact(props) {
  return (
    <div className="contact">
      <h2 className='contact-title'>{props.title}</h2>
      <p className='contact-description'>{props.description}</p>
      <div className='contact-submit'>
        <input placeholder='Seu melhor e-mail'></input>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
