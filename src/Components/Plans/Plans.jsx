
import './Plans.css';

function PlanCard (props) {
  return (
    <div className='plan-card'>
      <h3 className='plan-card-title'>{props.title}</h3>
      <h2 className='plan-card-price'><p className='plan-card-sifrao'>R$</p>{props.price}<p className='plan-card-month'>/mês</p></h2>
      <p className='plan-card-description'>{props.description}</p>
      <button className='plan-card-button'>Assinar</button>
    </div>
  )  
}

function Plans(props) {
  return (
    <div className='plans'>
      <div className='plans-wrapper'>
        <h2 className='plans-title'>{props.title}</h2>
        <p className='plans-description'>{props.description}</p>
        <div className='plans-display'>
          <PlanCard
            title={props.planCard1Title}
            price={props.planCard1Price}
            description={props.planCard1Description}
          />
          <PlanCard
            title={props.planCard2Title}
            price={props.planCard2Price}
            description={props.planCard2Description}
          />
          <PlanCard
            title={props.planCard3Title}
            price={props.planCard3Price}
            description={props.planCard3Description}
          />
        </div>      
      </div>
    </div>
  );
}

export default Plans;
