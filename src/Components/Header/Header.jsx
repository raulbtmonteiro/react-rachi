import { useState } from 'react';
import './Header.css';

function RenderNavItens(){

  const[navItens, setNavItens] = useState([ 'Funcionalidades' , 'App' , 'Planos' , 'Contato' ])

  return(
    navItens.map( (index) => (
      <li className='nav-bar-item'>{index}</li>
    ))
  )
}

function Header(props) {

  return (
    <header>
      <div className='header-wrapper'>
        <img className='logo' src={props.logo}></img>
        <nav>
          <ul id='nav-bar'>
            <RenderNavItens />
          </ul>
        </nav>
      </div>
    </header>
  
  );
}

export default Header;
