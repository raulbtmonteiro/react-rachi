import { useState } from 'react';
import logo from './Group_33553.png';
import menu from './menuhamburguer.svg'
import './Header.css';

function RenderNavItens(){

  const navItens = [ 'Funcionalidades' , 'App' , 'Planos' , 'Contato' ];

  return(
    navItens.map( (item) => (
      <li key={item} className='nav-bar-item'>{item}</li>
    ))
  )
}

function Hamburger(){
  return(
    <div className='hamburger-menu' >
      <div />
      <div />
      <div />
    </div>
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
        <img className='logo' src={logo} alt='teste' />
        <nav>
          <ul className='nav-bar' ><RenderNavItens /></ul>
          <ul className={navbarShow ? 'nav-bar-responsive' : 'responsive-off'} ><RenderNavItens /></ul>
          <div className={navbarShow ? 'overlay' : 'overlay-off'} onClick={() => ToggleMenu()}/>
          <div className='hamburger-menu' onClick={() => ToggleMenu()}>
            <div />
            <div />
            <div />
          </div>
          {/*<div className='hamburger' onClick={() => ToggleMenu()} ><img  src={menu} alt='teste' /></div>}*/}
        </nav>
      </div>
    </header>
  
  );
}

export default Header;
