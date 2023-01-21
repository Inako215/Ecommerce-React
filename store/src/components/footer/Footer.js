const footer = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="d-flex flex-row justify-content-around pb-4">
        <div className="d-flex flex-column align-items-center">
          <h3>Threads</h3>
          <ul className="d-flex flex-column align-items-center">
            <li className="fw-semibold my-1">30 E Wellesley Ave</li>
            <li className="fw-semibold mb-3">Spokane, WA 99207</li>
            <li className="mb-3">(509) 999-9999</li>
            <li>contact@threads.com</li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3>Help</h3>
          <ul className="d-flex flex-column align-items-center">
            <li>
              <a href="#" className="text-info text-decoration-none">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Payment Options
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3>Categories</h3>
          <ul className="d-flex flex-column align-items-center text-info">
            <li>
              <a href="#" className="text-info text-decoration-none">
                Womens
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Mens
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Bags
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="text-info text-decoration-none">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
