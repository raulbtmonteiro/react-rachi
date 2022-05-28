import { useState } from 'react';
import logo from './Group_33553.png';
import './Header.css';

function RenderNavItens(){

  const navItens = [ 'Funcionalidades' , 'App' , 'Planos' , 'Contato' ];

  return(
    navItens.map( (item) => (
      <li key={item} className='nav-bar-item'>{item}</li>
    ))
  )
}

function Header() {

  const[navbarShow, setNavbarShow] = useState(false);

  const ToggleMenu = () => {
    setNavbarShow(!navbarShow);
  }

  return (
    <header>
      <div className='header-wrapper'>
        <img className='logo' src={logo} alt='Logo da Rachi' />
        <nav>
          <ul className='nav-bar' id={navbarShow ? 'nav-bar-responsive' : 'responsive-off'}><RenderNavItens /></ul>
          <div className={navbarShow ? 'overlay' : 'overlay-off'} onClick={() => ToggleMenu()}/>
          <div className='hamburger-menu' onClick={() => ToggleMenu()}>
            <div />
            <div />
            <div />
          </div>
        </nav>
      </div>
    </header>
  
  );
}

export default Header;
