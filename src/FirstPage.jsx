import React from "react";

import Main from "./components/firstPage/Main";
import Aboutus from "./components/firstPage/Aboutus";

import Carousal from "./components/firstPage/Carousal";
import Tabs from "./components/firstPage/Tabs";

const FirstPage = () => {
  return (
    <div>
      <Main />
      <Aboutus />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 class="fw-bold mt-5 mb-5 overflow-hidden">Popular Coaches</h1>
        <div class="w-100 d-flex justify-content-center align-items-center ">
          <Tabs />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 class="fw-bold mt-5 mb-5 overflow-hidden">
          What people say about us
        </h1>
      </div>
      <Carousal />
    </div>
  );
};

export default FirstPage;
