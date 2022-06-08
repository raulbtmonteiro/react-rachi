import home_img from "../../assets/images/home_img.png";
import "./style.css";

export const Home = () => {
  return (
    <section className="home">
      <div className="home-wrapper">
        <div className="home-info">
          <h2 className="home-title">
            Rachi, é tudo que você precisa em um só lugar.
          </h2>
          <button className="home-button">Cadastrar-se</button>
        </div>
        <img
          className="home-img"
          src={home_img}
          alt="Pessoa utilizando o notebook ao ar livre"
        />
      </div>
    </section>
  );
};
