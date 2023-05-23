import React from "react";
import "../user/User_main.css";
import { Bar } from 'react-chartjs-2';
// import { CategoryScale, Chart, LinearScale, PointElement, BarChart } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, ChartJS);



const BarChart = function () {
  const data = {
    // labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange'],
    labels: ['Hiw', 'Kao', 'Leaw', 'Tuk', 'Kon'],
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Bar
      data={data}
      width={30}
      height={30}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export default BarChart;
