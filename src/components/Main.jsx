import React from "react";

const Main = () => {
  return (
    <div class="container custom-padding-main d-flex flex-column align-items-center text-center">
      <div class="custom-text mb-4">
        <p class="fw-bolder fs-4 overflow-hidden">
          Explore Local Coaches, Classes & Events
        </p>
        <p class="fs-6 fw-bold overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A asperiores
          voluptate aspernatur, perferendis sunt minima.
        </p>
        <button class="btn btn-primary custom-coach-btn mt-3 pt-2 d-flex justify-content-center align-items-center">
          Explore Coaches <span class="fs-3">&rarr;</span>
        </button>
      </div>
      <img src="/images/golf_2.png" alt="" class="img-fluid w-75 mb-4" />
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  d-flex justify-content-center align-items-center">
        <div class="col mb-4 justify-content-center align-items-center d-flex">
          <div class="custom-inner-div p-3 bg-dark text-white">
            <img src="/images/golf_3.png" alt="" class="img-fluid ms-2 mt-2" />
            <p class="fs-5">Find The Perfect Coach</p>
            <p>
              We help you find the best coach for your needs. You can filter by
              skill level, group size, and location. We can even provide
              equipment.
            </p>
          </div>
        </div>
        <div class="col mb-4 justify-content-center align-items-center d-flex">
          <div class="custom-inner-div p-3 bg-dark text-white">
            <img src="/images/golf_3.png" alt="" class="img-fluid ms-2 mt-2" />
            <p class="fs-5">Schedule In Seconds</p>
            <p>
              Unlike other websites, Teach me to lets you schedule your time and
              location online in seconds. We make the whole process seamless.
            </p>
          </div>
        </div>
        <div class="col mb-4 justify-content-center align-items-center d-flex">
          <div class="custom-inner-div p-3 bg-dark text-white">
            <img src="/images/golf_3.png" alt="" class="img-fluid ms-2 mt-2" />
            <p class="fs-5">Find The Perfect Coach</p>
            <p>
              Unlike other websites, Teach me to lets you schedule your time and
              location online in seconds. We make the whole process seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
