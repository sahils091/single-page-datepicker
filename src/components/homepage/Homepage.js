import React from "react";
import "./homepage.scss";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__wrapper">
        <div className="homepage__menu-wrapper">
          <Menu />
        </div>
        <div className="homepage__main">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
