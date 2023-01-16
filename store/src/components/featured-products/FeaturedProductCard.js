const FeaturedProductCard = ({ product }) => {
  const { name, price, image, slug } = product;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <div className="card-action">
        <Link to={`/products/${slug}`}>View Product</Link>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
