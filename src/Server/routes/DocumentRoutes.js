const express = require('express');
const Document = require('../Models/Document');
const router = express.Router();

// Create Document
router.post('/create', async (req, res) => {
  const { name, approvedUsers } = req.body;

  try {
    const newDocument = new Document({ name, approvedUsers });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get Document Status for User
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const documents = await Document.find({ approvedUsers: userId });
    res.json(documents);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
