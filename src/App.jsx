import React, {Fragment} from 'react'
import Header from './Components/Header/Header.jsx'
import logo from './Group_33553.png';
import Home from './Components/Home/Home.jsx'
import Functionality from './Components/Functionality/Functionality.jsx'
import Apps from './Components/Apps/Apps.jsx'
import Plans from './Components/Plans/Plans.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css';

function App() {
  return (
    <Fragment>
      <Header
        logo={logo}        
      />
      <main>
        <Home
          title='Rachi, é tudo que você precisa em um só lugar.'
          img_ul=''
        />
        <Functionality
          title='Como funciona'
          car1_title='Crie conexões'
          car1_description='Lorem ipsum dolor sit amet, consecteteu.'
          car2_title='100% gratuito'
          car2_description='Lorem ipsum dolor sit amet, consecteteu.'
          car3_title='Compartilhamento'
          car3_description='Lorem ipsum dolor sit amet, consecteteu.'
        />
        <Apps
          title='Baixe nosso app para desfrutar mais!'
          description='Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.'
        />
        <Plans
          title='Nossos Planos'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
          planCard1Title='Bronze'
          planCard1Price='28'
          planCard1Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
          planCard2Title='Prata'
          planCard2Price='57'
          planCard2Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
          planCard3Title='Ouro'
          planCard3Price='94'
          planCard3Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
        />
        <Contact
          title='Contato'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
        />
      </main>
      <Footer
        title='Rachi - Todos os direitos reservados.'
      />
    </Fragment>    
  );
}

export default App;
