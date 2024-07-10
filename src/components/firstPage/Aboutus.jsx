import React from "react";

const Aboutus = () => {
  const coaches = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div class="container d-flex flex-column align-items-center text-center">
      <div class="row w-100 justify-content-center">
        <div class="col-lg-6 col-md-12 bg-white">
          <div class="custom-inner-2 mt-5 bg-white">
            <p>About us</p>
            <p class="fw-bolder fs-1 text-black">
              MPRUV is built to manage and grow your entire coaching business.
            </p>
            <ul class="text-start bg-white">
              <li>MPRUV is built to manage and grow your entire business.</li>
              <li>We help you find the best coach for your needs.</li>
              <li>We make the whole process seamless.</li>
              <li>
                Unlike other websites, we schedule your location and time in
                seconds.
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="/images/golf_4.png" alt="" class="img-fluid custom-img" />
        </div>
      </div>
      <h1 class="fw-bold mt-5 mb-5 overflow-hidden">Popular Coaches</h1>
      <div class="row w-100 justify-content-center align-items-center d-flex">
        {coaches.map((coach) => {
          return (
            <div
              class="col-lg-3 col-md-6 mb-4 justify-content-center align-items-center d-flex"
              key={coach.id}
            >
              <div className="custom-user-card d-flex flex-column bg-white text-black">
                <div></div>
                <img src="/images/golf_5.png" alt="" />
                <div className="d-flex flex-column align-items-center">
                  <p className="fs-2 mt-5">Alex Martin</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing ashjhs
                    elit. Aliquid, expedita!
                  </p>
                  <button className="mb-3">View Profile</button>
                </div>
                <div className="pt-2 ps-2">READ MORE</div>
              </div>
            </div>
          );
        })}
      </div>

      <h1 class="fw-bold mt-5 mb-5 overflow-hidden">Pictures</h1>
      <div class="d-flex justify-content-center align-items-center">
        <img src="/images/golf_6.png" class="img-fluid w-75" alt="" />
      </div>
    </div>
  );
};

export default Aboutus;
