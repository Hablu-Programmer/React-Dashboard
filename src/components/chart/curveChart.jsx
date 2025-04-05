import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const MonthlyLineChart = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, "rgba(75, 192, 192, 0.6)");
      gradientFill.addColorStop(0.5, "rgba(75, 192, 192, 0.3)");
      gradientFill.addColorStop(1, "rgba(75, 192, 192, 0)");
      setGradient(gradientFill);
    }
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [50, 120, 180, 130, 220, 170, 250, 290, 180, 240, 110, 190],
        borderColor: "#4BC0C0",
        backgroundColor: gradient || "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4BC0C0",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#4BC0C0",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#222",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
        padding: 10,
        borderColor: "#4BC0C0",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#ffffffb3", font: { size: 12 } },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.1)", lineWidth: 0.5 },
        min: 0,
        max: 300,
        ticks: { color: "#ffffffb3", font: { size: 12 } },
      },
    },
  };

  return (
    <div className="w-full rounded-2xl shadow-lg">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default MonthlyLineChart;
