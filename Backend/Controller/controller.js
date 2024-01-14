
// const YourDataModel = require('../Model/datamodel');

// const yourController = {
//     createDocument: async (req, res) => {
//         try {
//           const newDocument = new YourDataModel(req.body);
    
//           // Validate the document using Mongoose validate method
//           await newDocument.validate();
    
//           // Save the document to the database
//           const savedDocument = await newDocument.save();
//           res.status(201).json(savedDocument);
//         } catch (error) {
//           if (error.name === 'ValidationError') {
//             const validationErrors = Object.values(error.errors).map(({ message }) => message);
//             return res.status(400).json({ error: 'Validation Error', details: validationErrors });
//           }
    
//           console.error(`Error creating document: ${error.message}`);
//           res.status(500).json({ error: 'Internal Server Error' });
//         }
//       },

//   getAllDocuments: async (req, res) => {
//     try {
//         const newDocument = new YourDataModel(req.body);

//       // Validate the document using Mongoose validate method
//       await newDocument.validate();
//       const allDocuments = await YourDataModel.find();
//       res.status(200).json(allDocuments);
//     } catch (error) {
//       console.error(`Error getting documents: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   getDocumentById: async (req, res) => {
//     try {
//       const document = await YourDataModel.findById(req.params.id);
//       if (!document) {
//         return res.status(404).json({ error: 'Document not found' });
//       }
//       res.status(200).json(document);
//     } catch (error) {
//       console.error(`Error getting document: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   updateDocumentById: async (req, res) => {
//     try {
//       const updatedDocument = await YourDataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       if (!updatedDocument) {
//         return res.status(404).json({ error: 'Document not found' });
//       }
//       res.status(200).json(updatedDocument);
//     } catch (error) {
//       console.error(`Error updating document: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   deleteDocumentById: async (req, res) => {
//     try {
//       const deletedDocument = await YourDataModel.findByIdAndDelete(req.params.id);
//       if (!deletedDocument) {
//         return res.status(404).json({ error: 'Document not found' });
//       }
//       res.status(204).send(); // No content on successful deletion
//     } catch (error) {
//       console.error(`Error deleting document: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

// module.exports = yourController;
// const YourDataModel = require('../Model/datamodel');
// const { importJsonData, upload } = require('../Model/datamodel');
// const multer = require('multer');
//  // Importing upload function from datamodel

// const yourController = {
//   createDocument: async (req, res) => {
//     try {
//       const newDocument = new YourDataModel(req.body);

//       // Validate the document using Mongoose validate method
//       await newDocument.validate();

//       // Save the document to the database
//       const savedDocument = await newDocument.save();
//       res.status(201).json(savedDocument);
//     } catch (error) {
//       if (error.name === 'ValidationError') {
//         const validationErrors = Object.values(error.errors).map(({ message }) => message);
//         return res.status(400).json({ error: 'Validation Error', details: validationErrors });
//       }

//       console.error(`Error creating document: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   importJsonDocuments: async (req, res) => {
//     try {
//       // Use the upload middleware to handle the file
//       upload.single('file')(req, res, async function (err) {
//         if (err instanceof multer.MulterError) {
//           return res.status(400).json({ error: 'Multer Error', details: err.message });
//         } else if (err) {
//           return res.status(500).json({ error: 'Internal Server Error', details: err.message });
//         }

//         // Pass the file buffer to importJsonData function
//         await importJsonData(req.file.buffer);

//         res.status(200).send('Data import process initiated');
//       });
//     } catch (error) {
//       console.error(`Error importing JSON documents: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   getAllDocuments: async (req, res) => {
//     try {
//       const allDocuments = await YourDataModel.find();
//       res.status(200).json(allDocuments);
//     } catch (error) {
//       console.error(`Error getting documents: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   getDocumentById: async (req, res) => {
//          try {
//            const document = await YourDataModel.findById(req.params.id);
//            if (!document) {
//              return res.status(404).json({ error: 'Document not found' });
//            }
//            res.status(200).json(document);
//          } catch (error) {
//            console.error(`Error getting document: ${error.message}`);
//            res.status(500).json({ error: 'Internal Server Error' });
//          }
//        },
    
//        updateDocumentById: async (req, res) => {
//          try {
//            const updatedDocument = await YourDataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//            if (!updatedDocument) {
//              return res.status(404).json({ error: 'Document not found' });
//            }
//            res.status(200).json(updatedDocument);
//          } catch (error) {
//            console.error(`Error updating document: ${error.message}`);
//            res.status(500).json({ error: 'Internal Server Error' });
//          }
//        },
    
//        deleteDocumentById: async (req, res) => {
//          try {
//            const deletedDocument = await YourDataModel.findByIdAndDelete(req.params.id);
//            if (!deletedDocument) {
//              return res.status(404).json({ error: 'Document not found' });
//            }
//            res.status(204).send(); // No content on successful deletion
//          } catch (error) {
//            console.error(`Error deleting document: ${error.message}`);
//            res.status(500).json({ error: 'Internal Server Error' });
//          }
//   }

// };

// module.exports = yourController;
const YourDataModel = require('../Model/datamodel');
const multer = require('multer');
const { importJsonData } = require('../Model/datamodel');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const yourController = {
  createDocument: async (req, res) => {
    try {
      const newDocument = new YourDataModel(req.body);

      // Validate the document using Mongoose validate method
      await newDocument.validate();

      // Save the document to the database
      const savedDocument = await newDocument.save();
      res.status(201).json(savedDocument);
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(({ message }) => message);
        return res.status(400).json({ error: 'Validation Error', details: validationErrors });
      }

      console.error(`Error creating document: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  importJsonDocuments: async (req, res) => {
    try {
      // Use the upload middleware to handle the file
      upload.single('file')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Multer Error', details: err.message });
        } else if (err) {
          return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }

        // Pass the file buffer to importJsonData function
        if (req.file) {
          try {
            await importJsonData(req.file.buffer);
            res.status(200).send('Data import process initiated');
          } catch (error) {
            if (error.name === 'ValidationError') {
              // Handle Mongoose validation error
              const validationErrors = Object.values(error.errors).map(({ path, kind, value }) => ({
                path,
                kind,
                value,
                message: error.errors[path].message,
              }));
              return res.status(400).json({ error: 'Validation Error', details: validationErrors });
            } else if (error instanceof Error) {
              // Handle other unexpected errors
              console.error(`Unexpected error: ${error.message}`);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          }
        } else {
          res.status(400).json({ error: 'No file uploaded' });
        }
      });
    } catch (error) {
      console.error(`Unexpected error: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getAllDocuments: async (req, res) => {
    try {
      const allDocuments = await YourDataModel.find();
      res.status(200).json(allDocuments);
    } catch (error) {
      console.error(`Error getting documents: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getDocumentById: async (req, res) => {
    try {
      const document = await YourDataModel.findById(req.params.id);
      if (!document) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.status(200).json(document);
    } catch (error) {
      console.error(`Error getting document: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateDocumentById: async (req, res) => {
    try {
      const updatedDocument = await YourDataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedDocument) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.status(200).json(updatedDocument);
    } catch (error) {
      console.error(`Error updating document: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteDocumentById: async (req, res) => {
    try {
      const deletedDocument = await YourDataModel.findByIdAndDelete(req.params.id);
      if (!deletedDocument) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.status(204).send(); // No content on successful deletion
    } catch (error) {
      console.error(`Error deleting document: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = yourController;
