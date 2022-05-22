import { useState } from 'react';
import styled from 'styled-components';
import logo from './Group_33553.png';
import menu from './menuhamburguer.svg'
import './Header.css';

const Menu = styled.nav`
  background-color: red
`;


function RenderNavItens(){

  const navItens = [ 'Funcionalidades' , 'App' , 'Planos' , 'Contato' ];

  return(
    navItens.map( (index) => (
      <li className='nav-bar-item'>{index}</li>
    ))
  )
}

function Header(props) {

  const[navbarShow, setNavbarShow] = useState(true);
  const[menuShow, setMenuShow] = useState(false);

  const ToggleMenu = () => {
    return(
      setNavbarShow(!navbarShow),
      setMenuShow(!menuShow)
    )
  }

  return (
    <header>
      <div className='header-wrapper'>
        <img className='logo' src={logo} alt='teste'></img>
        <nav>
          <ul id={navbarShow ? 'nav-bar' : 'nav-bar-responsive' }><RenderNavItens /></ul>
          <img id={menuShow ? 'menu-on' : 'menu-off' } src={menu} alt='teste' onClick={() => ToggleMenu()}></img>
        </nav>
      </div>
    </header>
  
  );
}

export default Header;
