// This component is used to display the cards in the card group
//it maps through the cards array and displays each card
//it is used in the body component

import Card from "./Card";

const displayCards = (cards) => {
  return (
    <div className="card-group gap-3">
      {cards.cards.cards.map((card, key) => (
        <Card card={card} key={key} />
      ))}
    </div>
  );
};

export default displayCards;
