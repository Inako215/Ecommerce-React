// This is a card component that will be used to display the individual cards
// it is used in the displayCards component

const Card = ({ cards: { title, image } }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card border-0">
            <img
              className="card-img-top h-100 d-block"
              src={image}
              alt="Card cap"
            />
            <div className="card-body">
              <h4 className="d-flex justify-content-center card-title">
                {title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
