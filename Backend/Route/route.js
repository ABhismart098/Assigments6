const express = require('express');
const router = express.Router();
const yourController = require('../Controller/controller'); // Adjust the path accordingly

// Define routes

// Create a new document
router.post('/documents', yourController.createDocument);

// Get all documents
router.get('/documents', yourController.getAllDocuments);

// Get a document by ID
router.get('/documents/:id', yourController.getDocumentById);

// Update a document by ID
router.put('/documents/:id', yourController.updateDocumentById);

// Delete a document by ID
router.delete('/documents/:id', yourController.deleteDocumentById);

module.exports = router;
