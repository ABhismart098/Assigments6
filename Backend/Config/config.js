// // config/db.js

// // const mongoose = require('mongoose');
// // const { MONGO_URI } = process.env;

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(MONGO_URI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log('Connected to MongoDB');
// //   } catch (error) {
// //     console.error(`Error connecting to MongoDB: ${error.message}`);
// //     process.exit(1); // Exit the process with an error code
// //   }
// // };

// // module.exports = connectDB;
// const mongoose = require('mongoose');
// const { MONGO_URI } = process.env;

// const connectDB = async () => {
//   try {
//     const connection = await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Log connection success
//     console.log('Connected to MongoDB');

//     // Check for successful connection
//     connection.on('connected', () => {
//       console.log('MongoDB connection established');
//     });

//     // Check for disconnection events
//     connection.on('disconnected', () => {
//       console.log('MongoDB disconnected');
//     });

//     // Check for errors during connection
//     connection.on('error', (err) => {
//       console.error(`MongoDB connection error: ${err}`);
//     });
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1); // Exit the process with an error code
//   }
// };

// module.exports = connectDB;
// const mongoose = require('mongoose');
// const { MONGO_URI } = process.env
// require('dotenv').config()

// const connectDB = async () => {
//   try {
//     const connection = await mongoose.connect(MONGO_URI);

//     // Log connection success
//     console.log('Connected to MongoDB');

//     // Check for successful connection
//     connection.connection.on('connected', () => {
//       console.log('MongoDB connection established');
//     });

//     // Check for disconnection events
//     connection.connection.on('disconnected', () => {
//       console.log('MongoDB disconnected');
//     });

//     // Check for errors during connection
//     connection.connection.on('error', (err) => {
//       console.error(`MongoDB connection error: ${err}`);
//     });
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1); // Exit the process with an error code
//   }
// };

// module.exports = connectDB;
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables

// const MONGO_URI = process.env.MONGO_URI;

// const connectDB = async () => {
//   try {
//     const connection = await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Log connection success
//     console.log('Connected to MongoDB');

//     // Check for successful connection
//     connection.connection.on('connected', () => {
//       console.log('MongoDB connection established');
//     });

//     // Check for disconnection events
//     connection.connection.on('disconnected', () => {
//       console.log('MongoDB disconnected');
//     });

//     // Check for errors during connection
//     connection.connection.on('error', (err) => {
//       console.error(`MongoDB connection error: ${err}`);
//     });
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1); // Exit the process with an error code
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);

    // Log connection success
    console.log('Connected to MongoDB');

    // Check for successful connection
    connection.connection.on('connected', () => {
      console.log('MongoDB connection established');
    });

    // Check for disconnection events
    connection.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    // Check for errors during connection
    connection.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectDB;
