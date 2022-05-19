
import { useState } from 'react';
import './Plans.css';

function PlanCard () {

  const[plans, setPlans] = useState([
    {
      title: 'Bronze',
      price: '28',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
    },
    {
      title: 'Prata',
      price: '57',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
    },
    {
      title: 'Ouro',
      price: '94',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
    }
  ])

  return (
    plans.map( (index) => (
      <div className='plan-card'>
        <h3 className='plan-card-title'>{index.title}</h3>
        <h2 className='plan-card-price'><p className='plan-card-sifrao'>R$</p>{index.price}<p className='plan-card-month'>/mês</p></h2>
        <p className='plan-card-description'>{index.description}</p>
        <button className='plan-card-button'>Assinar</button>
      </div>
    ))
  )  
}

function Plans(props) {
  return (
    <div className='plans'>
      <div className='plans-wrapper'>
        <h2 className='plans-title'>{props.title}</h2>
        <p className='plans-description'>{props.description}</p>
        <div className='plans-display'>
          <PlanCard />
        </div>      
      </div>
    </div>
  );
}

export default Plans;
