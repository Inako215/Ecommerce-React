const FeaturedProductCard = ({ product }) => {
  const { name, description, price, image, slug } = product;
  return (
    <div className="container-fluid pb-5">
      <div className="card">
        <div className="img-wrapper">
          <img src={image} className="d-block w-100 rounded-top" alt="..." />{" "}
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title d-flex justify-content-center">{name}</h5>
          <p className="card-text p-2 d-flex justify-content-center">
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center mx-3">
            <span className="card-text fw-semibold fs-3">${price}</span>
            <a href={slug} className="btn btn-primary text-light">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
