import React from "react";
import "./header.scss";
import avatar from "../../assets/avatar.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="header__title-wrapper">
        <h1 className="header__title">LOGO HERE</h1>
      </div>
      <div className="header__content-wrapper">
        <div className="header__profile-wrapper">
          <div className="header__profile-img--wrapper">
            <img
              src={avatar}
              alt="Profile Avatar"
              className="header__profile-img"
            />
          </div>
          <div className="header__profile-details">
            <p className="header__profile-name">Anthony Johnson</p>
            <span className="header__profile-company">Dummy Design.com</span>
          </div>
          <div className="header__profile-icon">
            <i className="fa fa-caret-down" style={{ fontSize: "24px" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
