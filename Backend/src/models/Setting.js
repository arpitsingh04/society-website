const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    contactNumber: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);
