import { useState } from 'react';
import logo from './Group_33553.png';
import menu from './menuhamburguer.svg'
import './Header.css';

function RenderNavItens(){

  const navItens = [ 'Funcionalidades' , 'App' , 'Planos' , 'Contato' ];

  return(
    navItens.map( (index) => (
      <li className='nav-bar-item'>{index}</li>
    ))
  )
}

function Header(props) {

  const[navbarShow, setNavbarShow] = useState(false);

  const changeNavbarShow = () => {
    if(navbarShow){
      return setNavbarShow(false)
    } else {
      return setNavbarShow(true)
    }
  }

  return (
    <header>
      <div className='header-wrapper'>
        <img className='logo' src={logo} alt='teste'></img>
        <nav>
          { navbarShow 
            ? <ul id='nav-bar'><RenderNavItens /></ul>
            : <img src={menu} alt='teste' onClick={() => changeNavbarShow()}></img>
          }
        </nav>
      </div>
    </header>
  
  );
}

export default Header;
