import conection from './Group.png';
import security from './carbon_security.png';
import share from './heroicons-outline_emoji-happy.png';
import './Functionality.css';
import { useState } from 'react';

function Icons() {

  const[iconsArray, setIconsArray] = useState([
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
  ])

  return (
    iconsArray.map( (index) => (
      <div className='icon'>
        <img className='icon-image' src={index.img_url} alt=''></img>
        <h5 className='icon-title'>{index.title}</h5>
        <p className='icon-description'>{index.description}</p>
      </div>
  )))
}

function Functionality(props) {
  return (
    <div className="functionality-wrapper">
      <h2 className='functionality-title'>{props.title}</h2>
      <div className='functionality-display'>
        <Icons />
      </div>
    </div>
  );
}

export default Functionality;
