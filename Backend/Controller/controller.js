const YourDataModel = require('../Model/datamodel'); // Import your Mongoose model

// Controller functions for MongoDB operations
const yourController = {
  // Create a new document
  createDocument: async (req, res) => {
    try {
      const newDocument = await YourDataModel.create(req.body);
      res.status(201).json(newDocument);
    } catch (error) {
      console.error(`Error creating document: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get all documents
  getAllDocuments: async (req, res) => {
    try {
      const allDocuments = await YourDataModel.find();
      res.status(200).json(allDocuments);
    } catch (error) {
      console.error(`Error getting documents: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get a document by ID
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

  // Update a document by ID
  updateDocumentById: async (req, res) => {
    try {
      const updatedDocument = await YourDataModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedDocument) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.status(200).json(updatedDocument);
    } catch (error) {
      console.error(`Error updating document: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a document by ID
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
  },
};

module.exports = yourController;
