// This component is used to display the cards in the card group
//it maps through the cards array and displays each card
//it is used in the body component

const displayCards = (cards) => {
  return (
    <div className="card-group gap-3">
      {cards.cards.cards.map((card, key) => (
        <div className="card border-0" key={key}>
          <img
            className="card-img-top h-100 rounded-top d-block"
            src={card.image}
            alt="Card cap"
          />
          <a href={`/products/${card.slug}`} className="text-decoration-none">
            <div className="card-body">
              <h4 className="d-flex justify-content-center card-title">
                {card.title}
              </h4>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default displayCards;
