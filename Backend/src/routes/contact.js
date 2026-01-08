const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
  submitContact, 
  getContacts, 
  updateContactStatus, 
  deleteContact 
} = require('../controllers/contactController');

// Public routes
router.post('/', submitContact);

// Protected routes (admin only)
router.get('/', auth, getContacts);
router.patch('/:id/status', auth, updateContactStatus);
router.delete('/:id', auth, deleteContact);

module.exports = router;