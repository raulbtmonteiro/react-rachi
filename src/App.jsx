import React from "react";
import {
  Header,
  Home,
  Functionality,
  Apps,
  Plans,
  Contact,
  Footer,
} from "./Components";

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
