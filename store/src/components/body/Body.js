import DisplayCards from "../cards/DisplayCards";

const Body = (cards) => {
  return (
    // This is the catagories section
    <section className="clean-block clean-info dark">
      <div className="container-fluid">
        <div className="block-heading">
          <h2 className="text-dark d-flex justify-content-center mt-5 pt-5">
            SHOP BY CATAGORIES
          </h2>
          <p className="d-flex justify-content-center mb-5 pb-5">
            Start shopping based on the categories you are interested in.
          </p>
        </div>
        {/* This is where the cards are displayed */}
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <DisplayCards cards={cards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
