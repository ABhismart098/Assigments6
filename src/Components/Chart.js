// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const YourChartComponent = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint to fetch data from your backend
//         const response = await axios.get('http://localhost:3001');
//         const data = response.data; // Assuming your data is an array of objects with required fields

//         // Process your data and format it for the chart
//         const formattedData = {
//           labels: data.map(item => item.date), // Replace 'date' with your actual date field
//           datasets: [
//             {
//               label: 'Intensity',
//               data: data.map(item => item.intensity), // Replace 'intensity' with your actual intensity field
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 2,
//               fill: false,
//             },
//             // Add more datasets or customize as needed
//           ],
//         };

//         setChartData(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Your Chart Title</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default YourChartComponent;
// import React, { useEffect, useState } from "react";
// import { Bar, Line } from "react-chartjs-2";
// import io from "socket.io-client";
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
// } from "chart.js";
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// );

// const socket = io("http://localhost:3001"); // Connect to the backend server

// const ChartComponent = ({ chartType, customizationOptions }) => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Data",
//         data: [],
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const createUpdatedData = (newData) => {
//     let receivedData = newData
//       .filter((data) => data?.end_year !== "" && data?.intensity !== "")
//       .sort((a, b) => a.end_year - b.end_year);
//     if (receivedData?.length > 0) {
//       let updatedData = { ...chartData };
//       updatedData.labels = receivedData.map((row) => row?.end_year);
//       updatedData.datasets[0].data = receivedData.map((row) => row?.intensity);
//       setChartData(updatedData);
//     }
//   };

//   useEffect(() => {
//     socket.on("updateChartData", (newData) => {
//       createUpdatedData(newData);
//     });
//     return () => {
//       socket.off("updateChartData");
//     };
//   }, );

//   const options = {
//     scales: {
//       x: { ...customizationOptions.xAxis },
//       y: { ...customizationOptions.yAxis },
//     },
//   };

//   const Chart = chartType === "bar" ? Bar : Line;

//   if (chartData?.labels?.length === 0) return <></>;

//   return <Chart data={chartData} options={options} />;
// };

// export default ChartComponent;
// import React, { useEffect, useState } from "react";
// import { Bar, Line } from "react-chartjs-2";
// import io from "socket.io-client";
// import { Chart } from "react-chartjs-2"; // Import Chart from react-chartjs-2
// import "chartjs-adapter-date-fns"; // Import the required date-fns adapter
// // Change the import from this
// import "chartjs-adapter-date-fns/locale/en";

// // To this
// import "chartjs-adapter-date-fns/dist/locale/en";
// // Import the locale for English

// const socket = io("http://localhost:3001"); // Connect to the backend server

// const ChartComponent = ({ chartType, customizationOptions }) => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Data",
//         data: [],
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const createUpdatedData = (newData) => {
//     let receivedData = newData
//       .filter((data) => data?.end_year !== "" && data?.intensity !== "")
//       .sort((a, b) => a.end_year - b.end_year);
//     if (receivedData?.length > 0) {
//       let updatedData = { ...chartData };
//       updatedData.labels = receivedData.map((row) => row?.end_year);
//       updatedData.datasets[0].data = receivedData.map((row) => row?.intensity);
//       setChartData(updatedData);
//     }
//   };

//   useEffect(() => {
//     socket.on("updateChartData", (newData) => {
//       createUpdatedData(newData);
//     });
//     return () => {
//       socket.off("updateChartData");
//     };
//   }, []);

//   const options = {
//     scales: {
//       x: { ...customizationOptions.xAxis },
//       y: { ...customizationOptions.yAxis },
//     },
//   };

//   if (chartData?.labels?.length === 0) return <></>;

//   return <Chart type={chartType === "bar" ? "bar" : "line"} data={chartData} options={options} />;
// };

// export default ChartComponent;
// import React, { useEffect, useState } from "react";
// import { Chart } from "react-chartjs-2";
// import io from "socket.io-client";
// import { Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
// import "chartjs-adapter-date-fns/dist/locale/en"; // Update the import path for the locale file

// const socket = io("http://localhost:3001");

// Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// const ChartComponent = ({ chartType, customizationOptions }) => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Data",
//         data: [],
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const createUpdatedData = (newData) => {
//     let receivedData = newData
//       .filter((data) => data?.end_year !== "" && data?.intensity !== "")
//       .sort((a, b) => a.end_year - b.end_year);

//     if (receivedData?.length > 0) {
//       let updatedData = { ...chartData };
//       updatedData.labels = receivedData.map((row) => row?.end_year);
//       updatedData.datasets[0].data = receivedData.map((row) => row?.intensity);
//       setChartData(updatedData);
//     }
//   };

//   useEffect(() => {
//     socket.on("updateChartData", (newData) => {
//       createUpdatedData(newData);
//     });

//     return () => {
//       socket.off("updateChartData");
//     };
//   }, [createUpdatedData]);

//   const options = {
//     scales: {
//       x: { ...customizationOptions.xAxis },
//       y: { ...customizationOptions.yAxis },
//     },
//   };

//   if (chartData?.labels?.length === 0) return <></>;

//   return <Chart type={chartType === "bar" ? "bar" : "line"} data={chartData} options={options} />;
// };

// export default ChartComponent;
// import React, { useEffect, useState } from "react";
// import { Chart } from "react-chartjs-2";
// import io from "socket.io-client";
// import { Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
// import "chartjs-adapter-date-fns/dist/locale/en.js"; // Update the import path for the locale file

// const socket = io("http://localhost:3001");

// Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// const ChartComponent = ({ chartType, customizationOptions }) => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Data",
//         data: [],
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 1,
//       },
//     ],
//   });

//   useEffect(() => {
//     const createUpdatedData = (newData) => {
//       let receivedData = newData
//         .filter((data) => data?.end_year !== "" && data?.intensity !== "")
//         .sort((a, b) => a.end_year - b.end_year);

//       if (receivedData?.length > 0) {
//         let updatedData = { ...chartData };
//         updatedData.labels = receivedData.map((row) => row?.end_year);
//         updatedData.datasets[0].data = receivedData.map((row) => row?.intensity);
//         setChartData(updatedData);
//       }
//     };

//     socket.on("updateChartData", (newData) => {
//       createUpdatedData(newData);
//     });

//     return () => {
//       socket.off("updateChartData");
//     };
//   }, [chartData]);

//   const options = {
//     scales: {
//       x: { ...customizationOptions.xAxis },
//       y: { ...customizationOptions.yAxis },
//     },
//   };

//   if (chartData?.labels?.length === 0) return <></>;

//   return <Chart type={chartType === "bar" ? "bar" : "line"} data={chartData} options={options} />;
// };

// export default ChartComponent;
import React, { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import io from "socket.io-client";
import { Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import "chartjs-adapter-date-fns/dist/locale/en/index.js"; // Update the import path for the locale file

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const socket = io("http://localhost:3001");

const ChartComponent = ({ chartType, customizationOptions }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Data",
        data: [],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const createUpdatedData = (newData) => {
      let receivedData = newData
        .filter((data) => data?.end_year !== "" && data?.intensity !== "")
        .sort((a, b) => a.end_year - b.end_year);

      if (receivedData?.length > 0) {
        let updatedData = { ...chartData };
        updatedData.labels = receivedData.map((row) => row?.end_year);
        updatedData.datasets[0].data = receivedData.map((row) => row?.intensity);
        setChartData(updatedData);
      }
    };

    socket.on("updateChartData", (newData) => {
      createUpdatedData(newData);
    });

    return () => {
      socket.off("updateChartData");
    };
  }, [chartData]);

  const options = {
    scales: {
      x: { ...customizationOptions.xAxis },
      y: { ...customizationOptions.yAxis },
    },
  };

  if (chartData?.labels?.length === 0) return <></>;

  return <Chart type={chartType === "bar" ? "bar" : "line"} data={chartData} options={options} />;
};

export default ChartComponent;
