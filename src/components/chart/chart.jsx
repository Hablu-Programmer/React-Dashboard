import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "Light Section",
        data: [80, 100, 80, 50, 50, 60],
        backgroundColor: "#A9DFD8",
        borderRadius: 10,
        barThickness: 25,
      },
      {
        label: "Dark Section",
        data: [70, 90, 70, 70, 55, 35],
        backgroundColor: "#2B2B36",
        hoverBackgroundColor: "#F2C8ED",
        borderRadius: 10,
        barThickness: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        bottom: 30,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            let dataset = tooltipItem.dataset;
            let value = dataset.data[tooltipItem.dataIndex];
            let total = dataset.data.reduce((acc, val) => acc + val, 0);
            let percentage = ((value / total) * 100).toFixed(2);
            return `${percentage}%`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: { display: false },
      },
      y: {
        stacked: true,
        display: false,
        grid: { display: false },
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="pb-5">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
