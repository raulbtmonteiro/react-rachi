import React, {Fragment} from 'react'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import Functionality from './Components/Functionality/Functionality.jsx'
import Apps from './Components/Apps/Apps.jsx'
import Plans from './Components/Plans/Plans.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Home
          title='Rachi, é tudo que você precisa em um só lugar.'
        />
        <Functionality 
          title='Como funciona'
        />
        <Apps
          title='Baixe nosso app para desfrutar mais!'
          description='Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.'
        />
        <Plans
          title='Nossos Planos'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
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
