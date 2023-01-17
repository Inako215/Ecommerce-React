// This is a card component that will be used to display the individual cards
// it is used in the displayCards component

const Card = ({ card: { title, image, slug } }) => {
  return (
    <div className="card border-0">
      <img className="card-img-top h-100 d-block" src={image} alt="Card cap" />
      <a href={`/products/${slug}`} className="text-decoration-none">
        <div className="card-body">
          <h4 className="d-flex justify-content-center card-title text-secondary">
            {title}
          </h4>
        </div>
      </a>
    </div>
  );
};
export default Card;
