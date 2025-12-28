import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      style={{
        borderBottom: "1px solid #eaeaea",
        height: "70px",
      }}
    >
      <div class="container p-2 ">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha"
            style={{ height: "24px" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
