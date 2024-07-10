import React from "react";
import Footer from "./components/firstPage/Footer";
import Header from "./components/firstPage/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
