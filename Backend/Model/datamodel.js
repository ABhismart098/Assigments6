
// const mongoose = require('mongoose');

// const yourDataSchema = new mongoose.Schema({
//   end_year: { type: String, default: null },
//   intensity: { type: Number, required: true },
//   sector: { type: String, required: true },
//   topic: { type: String, required: true },
//   insight: { type: String, required: true },
//   url: { type: String, required: true },
//   region: { type: String, required: true },
//   start_year: { type: String, default: null },
//   impact: { type: String },
//   added: { type: Date, required: true },
//   published: { type: Date, required: true },
//   country: { type: String, required: true },
//   relevance: { type: Number, required: true },
//   pestle: { type: String, required: true },
//   source: { type: String, required: true },
//   title: { type: String, required: true },
//   likelihood: { type: Number, required: true },
// });

// const YourDataModel = mongoose.model('YourDataModel', yourDataSchema);

// module.exports = YourDataModel;
// const mongoose = require('mongoose');
// const multer = require('multer');

// const yourDataSchema = new mongoose.Schema({
//   end_year: { type: String, default: null },
//    intensity: { type: Number, required: true },
//    sector: { type: String, required: true },
//    topic: { type: String, required: true },
//    insight: { type: String, required: true },
//    url: { type: String, required: true },
//    region: { type: String, required: true },
//    start_year: { type: String, default: null },
//    impact: { type: String },
//    added: { type: Date, required: true },
//    published: { type: Date, required: true },
//    country: { type: String, required: true },
//    relevance: { type: Number, required: true },
//    pestle: { type: String, required: true },
//    source: { type: String, required: true },
//    title: { type: String, required: true },
//    likelihood: { type: Number, required: true },
// });

// const YourDataModel = mongoose.model('YourDataModel', yourDataSchema);

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const importJsonData = async (fileBuffer) => {
//   try {
//     const jsonData = JSON.parse(fileBuffer.toString());
//     await YourDataModel.insertMany(jsonData);
//     console.log('Data imported successfully');
//   } catch (error) {
//     console.error('Error importing JSON data:', error);
//   }
// };

// module.exports = {
//   YourDataModel,
//   upload,
//   importJsonData
// };
const mongoose = require('mongoose');
const multer = require('multer');

const yourDataSchema = new mongoose.Schema({
  end_year: { type: String, default: null },
  intensity: { type: Number, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String, required: true },
  region: { type: String, required: true },
  start_year: { type: String, default: null },
  impact: { type: String },
  added: { type: Date, required: true },
  published: { type: Date, required: true },
  country: { type: String, required: true },
  relevance: { type: Number, required: true },
  pestle: { type: String, required: true },
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true },
});

const YourDataModel = mongoose.model('YourDataModel', yourDataSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const importJsonData = async (fileBuffer) => {
  try {
    const jsonData = JSON.parse(fileBuffer.toString());
    await YourDataModel.insertMany(jsonData);
    console.log('Data imported successfully');
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Handle Mongoose validation error
      const validationErrors = Object.values(error.errors).map(({ path, kind, value }) => ({
        path,
        kind,
        value,
        message: error.errors[path].message,
      }));
      console.error('Validation Error:', validationErrors);
    } else {
      console.error('Error importing JSON data:', error);
    }
  }
};

module.exports = {
  YourDataModel,
  upload,
  importJsonData
};
