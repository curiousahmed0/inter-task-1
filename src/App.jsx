import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Aboutus />
      <Carousal />
      <Footer />
    </div>
  );
};

export default App;
