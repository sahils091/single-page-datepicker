import React from "react";
import { Line } from "react-chartjs-2";

const Linecharts = () => {
  const data = {
    labels: [
      "2020",
      "Jan2020",
      "Feb2020",
      "Mar2020",
      "April2020",
      "May2020",
      "June2020",
      "July2020",
      "Aug2020",
    ],
    datasets: [
      {
        label: "",
        data: [180, 210, 350, 450, 370, 320, 250, 400, 470],
        borderColor: ["rgb(145, 203, 148)"],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
        lineTension: 0,
      },
      {
        label: "",
        data: [210, 190, 170, 180, 210, 200, 190, 210, 200],
        borderColor: ["rgb(87, 133, 233)"],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
        lineTension: 0,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 100,
            max: 600,
            stepSize: 100,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Linecharts;
