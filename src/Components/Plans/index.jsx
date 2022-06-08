import "./style.css";

const plansArray = [
  {
    title: "Bronze",
    isFavorite: false,
    price: "28",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.",
  },
  {
    title: "Prata",
    isFavorite: true,
    price: "57",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.",
  },
  {
    title: "Ouro",
    isFavorite: false,
    price: "94",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.",
  },
];

function PlanCard() {
  return plansArray.map((item) => (
    <div
      key={item.title}
      className={item.isFavorite ? "plan-card-favorite" : "plan-card"}
    >
      <h3 className="plan-card-title">{item.title}</h3>
      <button
        className={item.isFavorite ? "isfavorite-show" : "isfavorite-notshow"}
      >
        Preferido
      </button>
      <h4 className="plan-card-price">
        <p className="plan-card-sifrao">R$</p>
        {item.price}
        <p className="plan-card-month">/mês</p>
      </h4>
      <p className="plan-card-description">{item.description}</p>
      <button className="plan-card-button">Assinar</button>
    </div>
  ));
}

export const Plans = () => {
  return (
    <section className="plans">
      <div className="plans-wrapper">
        <h2 className="plans-title">Nossos Planos</h2>
        <p className="plans-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </p>
        <div className="plans-display">
          <PlanCard />
        </div>
      </div>
    </section>
  );
};
