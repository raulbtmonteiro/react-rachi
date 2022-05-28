import conection from './Group.png';
import security from './carbon_security.png';
import share from './heroicons-outline_emoji-happy.png';
import './Functionality.css';

function Icons() {

  const iconsArray = [
    {
      title:'Crie conexões',
      img_url: conection,
      description:'Lorem ipsum dolor sit amet, consecteteu.',
      alt: 'Ícone crie conexões'
    },
    {
      title:'100% gratuito',
      img_url: security,
      description:'Lorem ipsum dolor sit amet, consecteteu.',
      alt: 'Ícone 100% gratuito'
    },
    {
      title:'Compartilhamento',
      img_url: share,
      description:'Lorem ipsum dolor sit amet, consecteteu.',
      alt: 'Ícone compartilhamento'
    }
  ]

  return (
    iconsArray.map( (item) => (
      <div key={item.title} className='icon'>
        <img className='icon-image' src={item.img_url} alt={item.alt} />
        <h3 className='icon-title'>{item.title}</h3>
        <p className='icon-description'>{item.description}</p>
      </div>
  )))
}

function Functionality() {
  return (
    <section className="functionality-wrapper">
      <h2 className='functionality-title'>Como funciona</h2>
      <div className='functionality-display'>
        <Icons />
      </div>
    </section>
  );
}

export default Functionality;
