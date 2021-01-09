import React from "react";
import './menu.scss';

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu__list--wrapper">
        <ul className="menu__list">
          <li className="menu__item menu__item--one">
            Menu Option 1 <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            Menu Option 2 <span className="menu__item--more"> +</span>{" "}
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            Menu Option 3 <span className="menu__item--more"> +</span>{" "}
            <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            Menu Option 4 <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            Menu Option 5 <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">
            Menu Option 6 <span className="menu__right">&#10230;</span>
          </li>
        </ul>
      </div>
      <div className="menu__bottom">
        <ul className="menu__list">
          <li className="menu__item">
            Menu Option 7 <span className="menu__right">&#10230;</span>
          </li>
          <li className="menu__item">Settings</li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
