import React from "react";

const Carousal = () => {
  return (
    <div className="d-flex justify-content-center mb-5">
      <div className="w-75">
        <div
          id="carouselExampleCaptions"
          class="carousel carousel-dark slide "
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex flex-row">
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>{" "}
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex flex-row">
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white ">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex flex-row">
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
                <div class="card custom-review-card d-flex justify-content-center align-items-center">
                  <div className="row custom-review-name ">
                    <div className="col-6">
                      <img src="/images/golf_5.png" width={80} height={80} />
                    </div>
                    <div className="col-6">
                      <p className="text-white">Alex Martin</p>
                      <div className="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <p className="review-content mt-3 text-white">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder. In publishing and graphic design, Lorem ipsum
                    is a placeholder In publishing and graphic design, Lore
                    ipsum is a placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
