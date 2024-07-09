import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";
import Tabs from "./components/Tabs";
const App = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;
