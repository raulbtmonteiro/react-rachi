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
    <>
      <Header />
      <main>
        <Home />
        <Functionality />
        <Apps />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </>    
  );
}

export default App;
