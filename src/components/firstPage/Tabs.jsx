import React from "react";

const Tabs = () => {
  return (
    <div className=" ">
      <div className="d-flex justify-content-center">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item overflow-hidden" role="presentation">
            <a
              class="nav-link active"
              id="simple-tab-0"
              data-bs-toggle="tab"
              href="#simple-tabpanel-0"
              role="tab"
              aria-controls="simple-tabpanel-0"
              aria-selected="true"
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/basketball-ball-variant.png"
                  width={15}
                  height={15}
                  alt=""
                />
                <p>PICKLEBALL</p>
              </div>
            </a>
          </li>
          <li class="nav-item overflow-hidden" role="presentation">
            <a
              class="nav-link"
              id="simple-tab-1"
              data-bs-toggle="tab"
              href="#simple-tabpanel-1"
              role="tab"
              aria-controls="simple-tabpanel-1"
              aria-selected="false"
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/tennis-racket.png"
                  width={15}
                  height={15}
                  alt=""
                />
                <p>TENNIS</p>
              </div>
            </a>
          </li>
          <li class="nav-item overflow-hidden" role="presentation">
            <a
              class="nav-link"
              id="simple-tab-2"
              data-bs-toggle="tab"
              href="#simple-tabpanel-2"
              role="tab"
              aria-controls="simple-tabpanel-2"
              aria-selected="false"
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/golf-icon.png"
                  width={15}
                  height={15}
                  alt=""
                />
                <p>GOLF</p>
              </div>
            </a>
          </li>
          <li class="nav-item overflow-hidden" role="presentation">
            <a
              class="nav-link"
              id="simple-tab-3"
              data-bs-toggle="tab"
              href="#simple-tabpanel-3"
              role="tab"
              aria-controls="simple-tabpanel-3"
              aria-selected="false"
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/bowling-ball.png"
                  width={15}
                  height={15}
                  alt=""
                />
                <p>BOWLING</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-content pt-5" id="tab-content">
        <div
          class="tab-pane active"
          id="simple-tabpanel-0"
          role="tabpanel"
          aria-labelledby="simple-tab-0"
        >
          <div className="container mr-mobile">
            <div className="row d-flex justify-content-center">
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/pickleball.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/pickleball.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/pickleball.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane"
          id="simple-tabpanel-1"
          role="tabpanel"
          aria-labelledby="simple-tab-1"
        >
          <div className="container mr-mobile">
            <div className="row d-flex justify-content-center">
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/tennis.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/tennis.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/tennis.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane"
          id="simple-tabpanel-2"
          role="tabpanel"
          aria-labelledby="simple-tab-2"
        >
          <div className="container mr-mobile">
            <div className="row d-flex justify-content-center">
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img src="/images/golf.png" className="mt-1 me-3" alt="" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img src="/images/golf.png" className="mt-1 me-3" alt="" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img src="/images/golf.png" className="mt-1 me-3" alt="" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane"
          id="simple-tabpanel-3"
          role="tabpanel"
          aria-labelledby="simple-tab-3"
        >
          <div className="container mr-mobile">
            <div className="row d-flex justify-content-center">
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/bowling.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/bowling.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
              <div className="col-3 custom-tab-box">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-3 ms-3">Type: 30 minutes</h2>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/bowling.png"
                      className="mt-1 me-3"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque iusto ducimus a repudiandae ratione autem
                  doloremque quia accusantium magnam.
                </p>
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="mt-1 d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Missouri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
