import React from "react";

const Header = () => {
  return (
    <div className="bg-white vw-100 custom-height shadow-bottom row ">
      <div className="col-6 d-flex flex-row align-items-center">
        <img src="/images/golf_1.png" alt="logo" className="ms-5" />
        <p className="fs-6 text-primary text-decoration-underline mt-3 ms-4">
          Home
        </p>
      </div>
      <div className="col-6 d-flex flex-row align-items-center justify-content-end">
        <button className="me-3 btn bg-primary text-white">Sign in</button>
        <button className="me-5 btn bg-black text-white">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
