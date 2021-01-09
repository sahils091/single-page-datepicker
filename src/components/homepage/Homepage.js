import React from "react";
import "./homepage.scss";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
const Homepage = () => {
  return (
    <div className="homepage">
    <Header/>
      <div className="homepage__menu-wrapper">
        {/* Left Div  */}
        <Menu/>
      </div>

      <div className="homepage__main">{/* main div */}</div>
    </div>
  );
};

export default Homepage;
