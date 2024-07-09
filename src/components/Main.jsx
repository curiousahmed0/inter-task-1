import React from "react";

const Main = () => {
  return (
    <div className="custom-padding-main d-flex align-items-center flex-column">
      <div className="custom-text">
        <p className="fw-bolder ">Explore Local Coaches, Classes & Events</p>
        <p className="fs-6 fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A asperiores
          voluptate aspernatur, perferendis sunt minima.
        </p>
        <button className="custom-coach-btn">
          Explore Coaches <span className="fs-3 ">&rarr;</span>
        </button>
      </div>
      <img src="/images/golf_2.png" alt="" className="w-75" />
      <div className="row w-75 custom-multi-div d-flex justify-content-center align-items-center p-4">
        <div className="col-4">
          <div className="custom-inner-div">
            <img src="/images/golf_3.png" alt="" className="ms-2 mt-2" />
            <p className="text-white fs-3">Find The Perfect Coach</p>
            <p className="">
              We help you find the best coach for your needs. You can filter by
              skill level, group size and location. We can even provide
              equipment.
            </p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="custom-inner-div">
            <img src="/images/golf_3.png" alt="" className="ms-2 mt-2" />
            <p className="text-white fs-3">Schedule In Seconds</p>
            <p className="">
              Unlike other websites. Teach me to lets you schedule your time and
              location online in seconds. We make the whole process Seamless.
            </p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="custom-inner-div">
            <img src="/images/golf_3.png" alt="" className="ms-2 mt-2" />
            <p className="text-white fs-3">Find The Perfect Coach</p>
            <p className="">
              Unlike other websites. Teach me to lets you schedule your time and
              location online in seconds. We make the whole process Seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
