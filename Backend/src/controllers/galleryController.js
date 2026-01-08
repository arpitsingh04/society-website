const GalleryImage = require('../models/GalleryImage');
const fs = require('fs').promises;
const path = require('path');

const getImages = async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { title, description, category, eventDate, location, themes } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const image = new GalleryImage({
      filename: req.file.filename,
      originalName: req.file.originalname,
      title,
      description,
      description,
      category: category || 'General',
      filePath: req.file.filename,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      eventDate: eventDate || null,
      location: location || null,
      themes: themes ? JSON.parse(themes) : []
    });

    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteImage = async (req, res) => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const fullPath = path.join(__dirname, '../../uploads', image.filePath);
    await fs.unlink(fullPath).catch(() => { });
    await GalleryImage.findByIdAndDelete(req.params.id);

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getImages, uploadImage, deleteImage };