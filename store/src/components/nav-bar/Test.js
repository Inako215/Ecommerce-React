const Test = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top clean-navbar bg-primary shadow-sm">
        <div className="container-fluid p-2 mx-4">
          <a className="navbar-brand fw-semibold logo" href="index.html">
            THREADS
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-1" className="collapse navbar-collapse">
            <div className="container-fluid d-flex flex-lg-row justify-content-lg-between flex-md-column align-items-md-center py-2">
              <div className="form-inputs w-50 m-auto">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search any product..."
                />
                <i className="bx bx-search"></i>
              </div>

              <ul className="navbar-nav mt-0 mt-lg-0 d-flex flex-row">
                <li className="nav-item mx-4 mx-lg-0">
                  <a className="nav-link" href="contact-us.html">
                    <svg
                      className="fs-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shopping-cart.html">
                    <svg
                      className="fs-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3 1C2.44772 1 2 1.44772 2 2C2 2.55228 2.44772 3 3 3H4.21922L4.52478 4.22224C4.52799 4.23637 4.5315 4.25039 4.5353 4.26429L5.89253 9.69321L4.99995 10.5858C3.74002 11.8457 4.63235 14 6.41416 14H15C15.5522 14 16 13.5523 16 13C16 12.4477 15.5522 12 15 12L6.41417 12L7.41416 11H14C14.3788 11 14.725 10.786 14.8944 10.4472L17.8944 4.44721C18.0494 4.13723 18.0329 3.76909 17.8507 3.47427C17.6684 3.17945 17.3466 3 17 3H6.28078L5.97014 1.75746C5.85885 1.3123 5.45887 1 5 1H3Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16 16.5C16 17.3284 15.3284 18 14.5 18C13.6716 18 13 17.3284 13 16.5C13 15.6716 13.6716 15 14.5 15C15.3284 15 16 15.6716 16 16.5Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6.5 18C7.32843 18 8 17.3284 8 16.5C8 15.6716 7.32843 15 6.5 15C5.67157 15 5 15.6716 5 16.5C5 17.3284 5.67157 18 6.5 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="nav-item mx-4 mx-lg-0">
                  <a className="nav-link" href="login.html">
                    <svg
                      className="fs-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Test;
