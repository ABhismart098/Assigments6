// const mongoose = require('mongoose');

// // Define a Mongoose schema
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

// // Create a Mongoose model from the schema
// const YourDataModel = mongoose.model('YourDataModel', yourDataSchema);

// module.exports = YourDataModel;
const mongoose = require('mongoose');

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

module.exports = YourDataModel;
