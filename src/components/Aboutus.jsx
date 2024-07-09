import React from "react";
import Tabs from "./Tabs";

const Aboutus = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="row w-75">
        <div className="col-6">
          <div className="custom-inner-2 mt-5">
            <p>About us</p>
            <p className="fw-bolder fs-1 text-black">
              MPRUV is bult to manage and grow your entire coaching business.
            </p>
            <ul>
              <li>MPRUV is bult to manage and grow your entire bussiness.</li>
              <li>We help you find the best coach for your needs.</li>
              <li>We make the whole process seamless.</li>
              <li>
                Unlike other websites, we schedule your location and time in
                seconds.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <img src="/images/golf_4.png" alt="" className="custom-img" />
        </div>
      </div>
      <h1 className="fw-bold mt-5 mb-5">Popular Coaches</h1>
      <div className="row w-75 ">
        <div className="col-3">
          <div className="custom-user-card d-flex flex-column">
            <div></div>
            <img src="/images/golf_5.png" alt="" />
            <div className="d-flex flex-column align-items-center">
              <p className="fs-2 mt-5">Alex Martin</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, expedita!
              </p>
              <button className="mb-3">View Profile</button>
            </div>
            <div className="pt-2 ps-2">READ MORE</div>
          </div>
        </div>
        <div className="col-3">
          <div className="custom-user-card d-flex flex-column">
            <div></div>
            <img src="/images/golf_5.png" alt="" />
            <div className="d-flex flex-column align-items-center">
              <p className="fs-2 mt-5">Alex Martin</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, expedita!
              </p>
              <button className="mb-3">View Profile</button>
            </div>
            <div className="pt-2 ps-2">READ MORE</div>
          </div>
        </div>
        <div className="col-3">
          <div className="custom-user-card d-flex flex-column">
            <div></div>
            <img src="/images/golf_5.png" alt="" />
            <div className="d-flex flex-column align-items-center">
              <p className="fs-2 mt-5">Alex Martin</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, expedita!
              </p>
              <button className="mb-3">View Profile</button>
            </div>
            <div className="pt-2 ps-2">READ MORE</div>
          </div>
        </div>
        <div className="col-3">
          <div className="custom-user-card d-flex flex-column">
            <div></div>
            <img src="/images/golf_5.png" alt="" />
            <div className="d-flex flex-column align-items-center">
              <p className="fs-2 mt-5">Alex Martin</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, expedita!
              </p>
              <button className="mb-3">View Profile</button>
            </div>
            <div className="pt-2 ps-2">READ MORE</div>
          </div>
        </div>
      </div>
      <h1 className="fw-bold mt-5 mb-5">Popular Coaches</h1>
      <Tabs />
      <h1 className="fw-bold mt-5 mb-5">Pictures</h1>
      <div className="d-flex justify-content-center align-items-center">
        <img src="/images/golf_6.png" className="w-75" alt="" />
      </div>
      <h1 className="fw-bold mt-5 mb-5">What people say about us</h1>
    </div>
  );
};

export default Aboutus;
