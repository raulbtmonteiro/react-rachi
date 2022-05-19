
import home_img from './home_img.png';
import './Home.css';

function Home(props) {
  return (
    <div className='home'>
      <div className='home-wrapper'>
        <div className='home-info'>
          <h2 className='home-title'>{props.title}</h2>
          <button className='home-button'>Cadastrar-se</button>
        </div>
        <img className='home-img' src={home_img} alt=''></img>
      </div>
    </div>
  );
}

export default Home;
