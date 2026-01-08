const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);