// bootstrap modal used for login and register
//

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
//import Login from "../auth/Login";
//import Register from "../auth/Register";

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //center the modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    width: "100%",
    height: "auto",
  };

  const user = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Button onClick={handleShow}>
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
      </Button>
      <Modal show={show} onHide={handleClose} style={modalStyle}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form>
            <div class="mb-3">
              <label class="form-label" for="email">
                Email
              </label>
              <input id="email" class="form-control item" type="email" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="password">
                Password
              </label>
              <input id="password" class="form-control" type="password" />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input id="checkbox" class="form-check-input" type="checkbox" />
                <label class="form-check-label" for="checkbox">
                  Remember me
                </label>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              Log In
            </button>
            <div style="margin-top: 1rem;">
              <a class="link-dark" href="registration.html">
                Sign Up
              </a>
            </div>
          </form> */}
          <div>
            <form className="form">
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control item"
                  value={user.email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control item"
                  value={user.password}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <input
                  type="submit"
                  className="btn btn-primary my-1 text-info fw-semibold"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <p className="d-flex flex-column align-items-center">
              Don't have an account?
              <a href="#" className="text-secondary">
                Register
              </a>
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
