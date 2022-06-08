import { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./style.css";

const navItens = ["Funcionalidades", "App", "Planos", "Contato"];

function RenderNavItens() {
  return navItens.map((item) => (
    <li key={item} className="nav-bar-item">
      {item}
    </li>
  ));
}

export const Header = () => {
  const [navbarShow, setNavbarShow] = useState(false);

  return (
    <header>
      <div className="header-wrapper">
        <img className="logo" src={logo} alt="Logo da Rachi" />
        <nav>
          <ul
            className="nav-bar"
            id={navbarShow ? "nav-bar-responsive" : "responsive-off"}
          >
            <RenderNavItens />
          </ul>
          <div
            className={navbarShow ? "overlay" : "overlay-off"}
            onClick={() => setNavbarShow(!navbarShow)}
          />
          <div
            className="hamburger-menu"
            onClick={() => setNavbarShow(!navbarShow)}
          >
            <div />
            <div />
            <div />
          </div>
        </nav>
      </div>
    </header>
  );
};
