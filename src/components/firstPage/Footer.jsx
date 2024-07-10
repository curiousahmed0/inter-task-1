import React from "react";

const Footer = () => {
  return (
    // <div className="custom-footer ">
    //   <div className="row">
    //     <div className="col-6">
    //       <img
    //         src="/images/golf_7.png"
    //         className="mt-3 "
    //         width={160}
    //         height={80}
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-6 d-flex justify-content-end align-items-center">
    //       <button>Sign-up</button>
    //     </div>
    //   </div>
    //   <div className="line"></div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-4">
    //         <div className="d-flex flex-column">
    //           <p className="text-white mt-5">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           </p>
    //           <div className="d-flex flex-row ">
    //             <div>
    //               <img
    //                 src="/images/twitter.png"
    //                 width={20}
    //                 height={20}
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <img
    //                 src="/images/facebook.png"
    //                 width={20}
    //                 height={20}
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <img
    //                 src="/images/linkedin.png"
    //                 width={20}
    //                 height={20}
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <img
    //                 src="/images/instagram.png"
    //                 width={20}
    //                 height={20}
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-3">
    //         <div className="d-flex flex-row mt-5">
    //           <p className="text-primary me-5">Community</p>
    //           <button className="btn btn-primary custom-apply-btn ">
    //             Apply
    //           </button>
    //         </div>
    //         <p className="text-white">Events</p>
    //         <p className="text-white">Library</p>
    //       </div>
    //       <div className="col-3"></div>
    //     </div>
    //   </div>
    //   <div className="d-flex justify-content-center align-items-center mt-5">
    //     <p className="text-white">
    //       All rights reserved Maintained & Developed by{" "}
    //       <a href="https://fabtechsol.com/">Fabtechsol</a>
    //     </p>
    //   </div>
    // </div>
    <div class="custom-footer bg-dark text-white py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/golf_7.png"
              class="img-fluid"
              width="160"
              height="80"
              alt=""
            />
          </div>
          <div class="col-md-6 d-flex justify-content-md-end justify-content-center">
            <button class="btn btn-primary">Sign-up</button>
          </div>
        </div>
        <div class="line my-4"></div>
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div className="d-flex flex-row ">
              <p class="text-primary">Community</p>
              <button class="btn btn-primary custom-apply-btn ms-5">
                Apply
              </button>
            </div>
            <p class="mt-3">Events</p>
            <p>Library</p>
          </div>
          <div class="col-md-4 text-md-end text-center">
            <p class="mt-3 mt-md-0">
              All rights reserved Maintained & Developed by
              <a href="https://fabtechsol.com/" class="text-primary">
                Fabtechsol
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
