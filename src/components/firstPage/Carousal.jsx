import React from "react";

const Carousal = () => {
  const reviews = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div class="container mb-5 mt-5">
      <div className="d-flex justify-content-center ">
        <div
          class="carousel carousel-dark slide"
          id="carouselExampleCaptions"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active ">
              <div class="row d-flex justify-content-center align-items-center ">
                {reviews.map((review) => {
                  return (
                    <div key={review.id} class="col-xl-4 col-md-6 col-xxl-4">
                      <div class="card custom-review-card d-flex justify-content-center align-items-center">
                        <div class="row custom-review-name">
                          <div class="col-6 ">
                            <img
                              src="/images/golf_5.png"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>
                          <div class="col-6 ">
                            <p class="text-white">Alex Martin</p>
                            <div class="stars">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </div>
                        </div>
                        <p class="review-content mt-3 text-white">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder. In publishing and graphic design, Lorem
                          ipsum is a placeholder In publishing and graphic
                          design, Lore ipsum is a placeholder
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row d-flex justify-content-center align-items-center">
                {reviews.map((review) => {
                  return (
                    <div key={review.id} class="col-xl-4 col-md-6 col-xxl-4">
                      <div class="card custom-review-card d-flex justify-content-center align-items-center">
                        <div class="row custom-review-name">
                          <div class="col-6 ">
                            <img
                              src="/images/golf_5.png"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>
                          <div class="col-6 ">
                            <p class="text-white">Alex Martin</p>
                            <div class="stars">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </div>
                        </div>
                        <p class="review-content mt-3 text-white">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder. In publishing and graphic design, Lorem
                          ipsum is a placeholder In publishing and graphic
                          design, Lore ipsum is a placeholder
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row d-flex justify-content-center align-items-center">
                {reviews.map((review) => {
                  return (
                    <div key={review.id} class="col-xl-4 col-md-6 col-xxl-4">
                      <div class="card custom-review-card d-flex justify-content-center align-items-center">
                        <div class="row custom-review-name">
                          <div class="col-6 ">
                            <img
                              src="/images/golf_5.png"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>
                          <div class="col-6 ">
                            <p class="text-white">Alex Martin</p>
                            <div class="stars">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </div>
                        </div>
                        <p class="review-content mt-3 text-white">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder. In publishing and graphic design, Lorem
                          ipsum is a placeholder In publishing and graphic
                          design, Lore ipsum is a placeholder
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
