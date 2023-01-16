import { FaFile, FaTruck } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

const NavBar = () => {
  return (
    <>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>info@somedomain.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-warning"></i>{" "}
                <strong>1-800-123-1234</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="text-muted me-1">
                  <FaTruck />
                </i>
                <a className="text-muted" href="#">
                  Shipping
                </a>
              </span>
              <span className="me-3">
                <i className="text-muted me-2">
                  <FaFile />
                </i>
                <a className="text-muted" href="#">
                  Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-primary sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>THREADS</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-info"
                placeholder="Search"
              />
              <button className="btn btn-info text-white">
                <SlMagnifier />
              </button>
            </div>
          </div>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-info bg-primary"
                  placeholder="Search"
                />
                <button className="btn btn-info text-white">
                  <SlMagnifier />
                </button>
              </div>
            </div>
            {/* <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  href="#"
                >
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  About
                </a>
              </li>
            </ul> */}
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-cart-shopping me-1"></i> Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
