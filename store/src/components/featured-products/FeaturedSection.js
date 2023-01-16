import FeaturedCarousel from "./FeaturedCarousel";

const FeaturedSection = ({ products }) => {
  return (
    <section className="featured-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading d-flex justify-content-center">
              <h2 className="fs-1 my-3">Featured Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <FeaturedCarousel products={products} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
