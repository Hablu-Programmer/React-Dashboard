import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ percentage = 80 }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#A7DED9", "#2B2B36"],
        borderWidth: 0,
        cutout: "65%",
        rotation: -90,
        circumference: 180,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="relative mx-auto w-[250px] h-[174px]">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center text-[25px] font-bold md:mt-10 text-white">
        {percentage}%
      </div>
    </div>
  );
};

export default GaugeChart;
