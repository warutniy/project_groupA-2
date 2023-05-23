import React from "react";
import "../user/User_main.css";
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);



const LineChart = function () {
  const data = {
    // labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange'],
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Sample Dataset',
        data: [11, 7, 0, 5, 2, 3, 10],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 3,
      },
    ],
  }
  return (
    <Line
      data={data}
      width={10}
      height={10}
      options={{ maintainAspectRatio: true }}
    />
  );
};

export default LineChart;
