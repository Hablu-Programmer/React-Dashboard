import {
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const generateRandomData = (count, min = 60, max = 80, decimals = 2) => {
  return Array.from({ length: count }, () =>
    (Math.random() * (max - min) + min).toFixed(decimals)
  );
};

const getStoredData = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

const ChartComponent = () => {
  const [staticData1] = useState(() =>
    getStoredData("chartData1", generateRandomData(8, 40, 80))
  );
  const [staticData2] = useState(() =>
    getStoredData("chartData2", generateRandomData(8, 20, 80))
  );

  const chartRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chartData1", JSON.stringify(staticData1));
    localStorage.setItem("chartData2", JSON.stringify(staticData2));
  }, [staticData1, staticData2]);

  const createGradient = (ctx, colorStart, colorEnd) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Dataset 1",
        data: staticData1,
        borderColor: "#F2C8ED",
        backgroundColor: chartRef.current
          ? createGradient(
              chartRef.current.ctx,
              "rgba(242,200,237,1)",
              "rgba(242,200,237,0.1)"
            )
          : "rgba(242,200,237,0.5)",
        fill: "start",
      },
      {
        label: "Dataset 2",
        data: staticData2,
        borderColor: "#A9DFD8",
        backgroundColor: chartRef.current
          ? createGradient(
              chartRef.current.ctx,
              "rgba(169,223,216,1)",
              "rgba(169,223,216,0.1)"
            )
          : "rgba(169,223,216,0.5)",
        fill: "start",
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        bottom: 30,
      },
    },
    scales: {
      x: { display: false },
      y: {
        stacked: true,
        min: 0,
        max: 140,
        ticks: {
          callback: function (value) {
            return value >= 40 && value <= 120 ? "" : value;
          },
        },
      },
    },
    elements: {
      line: { tension: 0 },
    },
    plugins: {
      legend: { display: false },
      filler: { propagate: false },
    },
    interaction: { intersect: false },
  };

  return (
    <div className="w-full">
      <Line ref={chartRef} data={data} options={options} className="w-full" />
    </div>
  );
};

export default ChartComponent;
