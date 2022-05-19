
import notifications from './notifications.png';
import google_play from './google_play.png';
import app_store from './app_store.png';
import './Apps.css';

function Apps(props) {
  return (
    <div className='apps'>
      <div className='apps-wrapper'>
        <div className='apps-info'>
          <h3 className='apps-info-title'>{props.title}</h3>
          <p className='apps-info-description'>{props.description}</p>
          <div className='apps-info-buttons'>
            <button className='apps-button'><img src={google_play}></img></button>
            <button className='apps-button'><img src={app_store}></img></button>
          </div>
        </div>
        <img src={notifications} alt=''></img>
      </div>      
    </div>
  );
}

export default Apps;
