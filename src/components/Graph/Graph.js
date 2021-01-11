import React from "react";
import "./graph.scss";
import Linecharts from "../Linechart/Linecharts";
import Calender from "../Calender/Calender";

const Graph = () => {
  return (
    <div className="graph">
      <div className="graph__datepicker-wrapper">
        <Calender />
      </div>
      <div className="graph__title">Analytics</div>
      <div className="graph__detail-wrapper">
        <p className="graph__detail">
          245/500 &nbsp;
          <span className="graph__detail-type">Attribute</span>
        </p>
        <p className="graph__detail">
          120 &nbsp;
          <span className="graph__detail-type">Attribute 1</span>
        </p>

        <p className="graph__detail">
          125 &nbsp;
          <span className="graph__detail-type">Attribute 2</span>
        </p>
        <p className="graph__detail graph__detail--last">
          0 &nbsp;
          <span className="graph__detail-type">Attribute 3</span>
        </p>
      </div>

      <div className="graph__chart">
        <Linecharts />
      </div>
    </div>
  );
};

export default Graph;
