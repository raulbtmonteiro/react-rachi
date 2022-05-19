import conection from './Group.png';
import security from './carbon_security.png';
import share from './heroicons-outline_emoji-happy.png';
import './Functionality.css';

function Icon(props) {
  return (
    <div className='icon'>
      <img className='icon-image' src={props.img_url} alt=''></img>
      <h5 className='icon-title'>{props.title}</h5>
      <p className='icon-description'>{props.description}</p>
    </div>
  )
}

function Functionality(props) {
  return (
    <div className="functionality-wrapper">
      <h2 className='functionality-title'>{props.title}</h2>
      <div className='functionality-display'>
        <Icon
          img_url={conection}
          title= {props.car1_title}
          description= {props.car1_description}
        />
        <Icon
          img_url={security}
          title= {props.car2_title}
          description= {props.car2_description}
        />
        <Icon
          img_url={share}
          title= {props.car3_title}
          description= {props.car3_description}
        />
      </div>
    </div>
  );
}

export default Functionality;
