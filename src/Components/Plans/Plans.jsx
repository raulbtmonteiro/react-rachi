
import './Plans.css';

function PlanCard () {

  const plans = [
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
  ]

  return (
    plans.map( (item) => (
      <div key={item.title} className='plan-card'>
        <h3 className='plan-card-title'>{item.title}</h3>
        <h2 className='plan-card-price'><p className='plan-card-sifrao'>R$</p>{item.price}<p className='plan-card-month'>/mês</p></h2>
        <p className='plan-card-description'>{item.description}</p>
        <button className='plan-card-button'>Assinar</button>
      </div>
    ))
  )  
}

function Plans() {
  return (
    <section className='plans'>
      <div className='plans-wrapper'>
        <h2 className='plans-title'>Nossos Planos</h2>
        <p className='plans-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
        <div className='plans-display'>
          <PlanCard />
        </div>      
      </div>
    </section>
  )
}

export default Plans;
