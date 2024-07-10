import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg custom-height navbar-light bg-white shadow-sm">
      <div class="container-fluid ">
        <a class="navbar-brand ms-5" href="#">
          <img src="/images/golf_1.png" alt="logo" height="30" />
        </a>
        <button
          class="navbar-toggler mt-2 mb-2 me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-primary text-decoration-underline"
                href="#"
              >
                Home
              </a>
            </li>
          </ul>
          <div class="d-flex nav-btns">
            <button class="btn bg-primary text-white me-3">Sign in</button>
            <button class="btn bg-black text-white me-5">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
