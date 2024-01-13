// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const app = express();
// const config = require('./Config/config');

// const port = process.env.PORT || 3001;

// // Define a route handler for the root path
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const connectDB = require('./Config/config'); // Import the connectDB function
// const app = express();
 

// // Connect to MongoDB
// connectDB();

// const port = process.env.PORT || 3001;

// // Define a route handler for the root path
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const connectDB = require('./Config/config'); // Import the connectDB function
// const app = express();

// // Connect to MongoDB
// connectDB();

// const port = process.env.PORT || 3001;

// // Define a route handler for the root path
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server and listen on the specified port
// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
// const express = require('express');
// const connectDB = require('./Config/config'); // Assuming your MongoDB connection setup is in a separate file
// const yourRoutes = require('./Route/route'); // Adjust the path accordingly

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Use your routes
// app.use('/api', yourRoutes); // You can adjust the base path ('/api') according to your needs

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });
const express = require('express');
const connectDB = require('./Config/config'); // Assuming your MongoDB connection setup is in a separate file
const yourRoutes = require('./Route/route'); // Adjust the path accordingly

const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Use your routes
app.use('/api', yourRoutes); // You can adjust the base path ('/api') according to your needs

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
