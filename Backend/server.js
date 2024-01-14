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
