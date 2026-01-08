const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    contactNumber: {
        type: String,
        required: true,
        default: '+91 8928237775'
    },
    whatsappNumber: {
        type: String,
        required: true,
        default: '+91 8928237775'
    },
    email: {
        type: String,
        default: 'info@meenakshichsl.com'
    },
    address: {
        type: String,
        default: 'Meenakshi CHS, Plot 38, Sector 16, New Panvel East, Maharashtra'
    }
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);
