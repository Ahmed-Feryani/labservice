import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./style.scss";
const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="layout__body">{props.children}</div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
