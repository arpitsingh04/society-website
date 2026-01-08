const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: {
    type: String,
    required: true,
    enum: ['General', 'Society Meeting', 'Cultural Event', 'Sports', 'Workshop'],
    default: 'General'
  },
  filePath: { type: String, required: true },
  fileSize: { type: Number },
  mimeType: { type: String },
  eventDate: { type: Date },
  location: { type: String },
  themes: [{ type: String }]
}, {
  timestamps: true
});

module.exports = mongoose.model('GalleryImage', galleryImageSchema);