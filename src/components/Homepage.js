import React from "react";
import "./homepage.scss";
import Menu from "./menu/Menu";
const Homepage = () => {
  return (
    <div className="homepage">
    <div className="homepage__menu-title--wrapper">
          <h2 className="homepage__menu-title">LOGO HERE</h2>
        </div>
      <div className="homepage__menu-wrapper">
        {/* Left Div  */}
        <Menu/>
      </div>

      <div className="homepage__main">{/* main div */}</div>
    </div>
  );
};

export default Homepage;
