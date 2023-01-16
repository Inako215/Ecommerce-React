const Header = () => {
  return (
    <section className="container-fluid bg-primary p-5 mt-5">
      <div className="row">
        <div className="col">
          <h1 className="fw-semibold d-flex justify-content-center py-3">
            THREADS
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center d-xl-flex justify-content-xl-center justify-content-xxl-center">
          <p className="fs-3 d-xl-flex">Where Fashion Meets Affordability</p>
        </div>
      </div>

      <div className="col d-flex justify-content-center p-2">
        <a
          className="btn btn-light btn-lg fw-normal border rounded-pill border-1"
          role="button"
          href="catalog-page.html"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Header;
