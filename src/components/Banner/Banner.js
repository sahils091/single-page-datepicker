import React from "react";
import "./banner.scss";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";

import Graph from "../Graph/Graph";
import Footer from "../Footer/Footer";

const Banner = () => {
  return (
    <main className="banner">
      <div className="banner__btn-wrapper">
        <button className="banner__btn">Upgrade</button>
      </div>

      <div className="banner__attribute-wrapper">
        <div className="banner__attribute">
          <div className="banner__attribute-img--wrapper">
            <i className="fas fa-circle-notch fa-3x"></i>
          </div>
          <div className="banner__attribute-text--wrapper">
            <p className="banner__attribute-text">245/500</p>
            <p className="banner__attribute-subtext"> ATTRIBUTE 1</p>
          </div>
        </div>
        <div className="banner__attribute">
          <div className="banner__attribute-img--wrapper">
            <i className="fas fa-shield-alt fa-3x"></i>
          </div>
          <div className="banner__attribute-text--wrapper">
            <p className="banner__attribute-text">120</p>
            <p className="banner__attribute-subtext"> ATTRIBUTE 2</p>
          </div>
        </div>
        <div className="banner__attribute">
          <div className="banner__attribute-img--wrapper">
            <img
              className="banner__attribute-img"
              src={icon1}
              alt="Attribute  Icon"
            />
          </div>
          <div className="banner__attribute-text--wrapper">
            <p className="banner__attribute-text">125</p>
            <p className="banner__attribute-subtext"> ATTRIBUTE 3</p>
          </div>
        </div>
        <div className="banner__attribute">
          <div className="banner__attribute-img--wrapper">
            <img
              className="banner__attribute-img"
              src={icon2}
              alt="Attribute  Icon"
            />
          </div>
          <div className="banner__attribute-text--wrapper">
            <p className="banner__attribute-text">0</p>
            <p className="banner__attribute-subtext"> ATTRIBUTE 4</p>
          </div>
        </div>
      </div>
      <Graph />
      <Footer />
    </main>
  );
};

export default Banner;
