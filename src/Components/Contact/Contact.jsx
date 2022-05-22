
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2 className='contact-title'>Contato</h2>
      <p className='contact-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
      <div className='contact-submit'>
        <input placeholder='Seu melhor e-mail' />
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
