const express = require('express');
const router = express.Router();
const Contact = require('../schema/Contact')
router.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const newContact = new Contact({
        name,
        email,
        message,
      });
  
      await newContact.save();
      console.log('Message saved:', newContact);
      res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'Failed to save message' });
    }
  });

module.exports = router;
