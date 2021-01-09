import React from "react";
import "./menu.scss";

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu__list--wrapper">
        <ul className="menu__list">
          <li className="menu__item menu__item--one">
            <i className="fas fa-desktop"></i>

            <p className=" menu__item--blurb">Menu Option 1</p>
            <div className="menu__item--hidden">hello</div>
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item menu__item--blurb">
            <i className="fas fa-briefcase"></i>
            <p className=" menu__item--blurb">Menu Option 2</p>
            <span className="menu__item--more"> +</span>{" "}
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item menu__item--blurb">
            <i className="fas fa-bars"></i>
            <p className=" menu__item--blurb">Menu Option 3</p>
            <span className="menu__item--more"> +</span>{" "}
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            <i className="fas fa-archive"></i>
            <p className=" menu__item--blurb">Menu Option 4</p>
            <div className="menu__item--hidden">hello</div>
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            <i className="fas fa-laptop-code"></i>
            <p className=" menu__item--blurb">Menu Option 5</p>
            <div className="menu__item--hidden">hello</div>
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            <i className="far fa-window-restore"></i>
            <p className=" menu__item--blurb">Menu Option 6</p>
            <div className="menu__item--hidden">hello</div>
            <span className="menu__right">&#10230;</span>
          </li>
        </ul>
      </div>
      <div className="menu__bottom">
        <ul className="menu__list">
          <li className="menu__item">
            <i className="far fa-gem"></i>
            <p className=" menu__item--blurb">Menu Option 7</p>
            <div className="menu__item--hidden">hello</div>
            <span className="menu__right">&#10230;</span>
          </li>

          <li className="menu__item menu__item--setting">
            <i className="fas fa-cog"></i>
            <p className=" menu__item--blurb">Settings</p>
            <div className="menu__item--hidden">hello</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
