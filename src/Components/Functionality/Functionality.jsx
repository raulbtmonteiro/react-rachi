import conection from './Group.png';
import security from './carbon_security.png';
import share from './heroicons-outline_emoji-happy.png';
import './Functionality.css';

function Icons() {

  const iconsArray = [
    {
      title:'Crie conexões',
      img_url: conection,
      description:'Lorem ipsum dolor sit amet, consecteteu.'
    },
    {
      title:'100% gratuito',
      img_url: security,
      description:'Lorem ipsum dolor sit amet, consecteteu.'
    },
    {
      title:'Compartilhamento',
      img_url: share,
      description:'Lorem ipsum dolor sit amet, consecteteu.'
    }
  ]

  return (
    iconsArray.map( (item) => (
      <div className='icon'>
        <img className='icon-image' src={item.img_url} alt='' />
        <h5 className='icon-title'>{item.title}</h5>
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
