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
      console.log('Message saveds:', newContact);
      res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'Failed to save message' });
    }
  });
  router.get('/api/contact', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });
module.exports = router;
