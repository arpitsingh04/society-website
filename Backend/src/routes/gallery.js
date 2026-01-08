const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');
const { getImages, uploadImage, deleteImage } = require('../controllers/galleryController');

// Public routes
router.get('/', getImages);

// Protected routes (admin only)
router.post('/', auth, upload.single('image'), uploadImage);
router.delete('/:id', auth, deleteImage);

module.exports = router;