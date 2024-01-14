// // src/ChartComponent.js
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     // Fetch chart data from your Express API endpoint
//     fetch('/api/chart')
//       .then((response) => response.json())
//       .then((data) => {
//         // Process data to fit Chart.js format
//         const labels = data.map((entry) => entry.label);
//         const values = data.map((entry) => entry.value);

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Chart Data',
//               data: values,
//               fill: false,
//               borderColor: 'rgb(75, 192, 192)',
//               tension: 0.1,
//             },
//           ],
//         });
//       })
//       .catch((error) => console.error('Error fetching chart data:', error));
//   },
//    []);

//   return (
//     <div>
//       <h2>Chart Component</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default ChartComponent;
// src/ChartComponent.js
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     // Fetch chart data from your Express API endpoint
//     fetch('http://localhost:3001/api/chart')  // Update the URL to match your backend server
//       .then((response) => response.json())
//       .then((data) => {
//         // Process data to fit Chart.js format
//         const labels = data.map((entry) => entry.label);
//         const values = data.map((entry) => entry.value);

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Chart Data',
//               data: values,
//               fill: false,
//               borderColor: 'rgb(75, 192, 192)',
//               tension: 0.1,
//             },
//           ],
//         });
//       })
//       .catch((error) => console.error('Error fetching chart data:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Chart Component</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default ChartComponent;
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Chart Data',
//         data: [],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/chart');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();

//         if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('label') && data[0].hasOwnProperty('value')) {
//           const labels = data.map((entry) => entry.label);
//           const values = data.map((entry) => entry.value);

//           setChartData({
//             labels,
//             datasets: [
//               {
//                 label: 'Chart Data',
//                 data: values,
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//               },
//             ],
//           });
//         } else {
//           console.error('Invalid data format:', data);
//           setError('Invalid data format');
//         }
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Chart Component</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default ChartComponent;
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Chart Data',
//         data: [],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/chart');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data); // Log data to see its structure

//         if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('label') && data[0].hasOwnProperty('value')) {
//           const labels = data.map((entry) => entry.label);
//           const values = data.map((entry) => entry.value);

//           setChartData({
//             labels,
//             datasets: [
//               {
//                 label: 'Chart Data',
//                 data: values,
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//               },
//             ],
//           });
//         } else if (Array.isArray(data) && data.length === 0) {
//           console.warn('Data is empty');
//           setError('Data is empty');
//         } else {
//           console.error('Invalid data format:', data);
//           setError('Invalid data format');
//         }
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Chart Component</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default ChartComponent;
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Chart Data',
//         data: [],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/documents'); // Replace with your actual backend API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();

//         if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('label') && data[0].hasOwnProperty('value')) {
//           const labels = data.map((entry) => entry.label);
//           const values = data.map((entry) => entry.value);

//           setChartData({
//             labels,
//             datasets: [
//               {
//                 label: 'Chart Data',
//                 data: values,
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//               },
//             ],
//           });
//         } else if (Array.isArray(data) && data.length === 0) {
//           console.warn('Data is empty');
//           setError('Data is empty');
//         } else {
//           console.error('Invalid data format:', data);
//           setError('Invalid data format');
//         }
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Chart Component</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default ChartComponent;
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Chart Data',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/documents'); // Replace with your actual backend API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      processChartData(data);
    } catch (error) {
      console.error('Error fetching chart data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const processChartData = (data) => {
    if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('label') && data[0].hasOwnProperty('value')) {
      const labels = data.map((entry) => entry.label);
      const values = data.map((entry) => entry.value);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Chart Data',
            data: values,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    } else if (Array.isArray(data) && data.length === 0) {
      console.warn('Data is empty');
      setError('Data is empty');
    } else {
      console.error('Invalid data format:', data);
      setError('Invalid data format');
    }
  };

  useEffect(() => {
    fetchData();
  }, );

  const handleImportData = async () => {
    try {
      const response = await fetch('path/to/your/json/data.json'); // Update with the path to your JSON file
      if (!response.ok) {
        throw new Error('Failed to fetch JSON data');
      }

      const jsonData = await response.json();

      processChartData(jsonData);
    } catch (error) {
      console.error('Error importing JSON data:', error);
      setError('Error importing data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Chart Component</h2>
      <button onClick={handleImportData}>Import JSON Data</button>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
