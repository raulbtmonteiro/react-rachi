import './Header.css';

const navItens = [ 'Funcionalidades' , 'App' , 'Planos' , 'Contato' ]

function Header(props) {

  const RenderNavItens = ({itens}) => {
    return(
      itens.map( (index) => (
        <li className='nav-bar-item'>{index}</li>
      ))
    )
  }
 
  return (
    <header>
      <div className='header-wrapper'>
        <img className='logo' src={props.logo}></img>
        <nav>
          <ul id='nav-bar'>
            <RenderNavItens itens={navItens}/>
          </ul>
        </nav>
      </div>
    </header>
  
  );
}

export default Header;
