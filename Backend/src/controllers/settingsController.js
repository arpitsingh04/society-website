const Setting = require('../models/Setting');

// Get Settings (Create default if not exists)
exports.getSettings = async (req, res) => {
    try {
        let setting = await Setting.findOne();
        if (!setting) {
            setting = new Setting();
            await setting.save();
        }
        res.json(setting);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Settings
exports.updateSettings = async (req, res) => {
    try {
        const { contactNumber, whatsappNumber, email } = req.body;
        let setting = await Setting.findOne();

        if (!setting) {
            setting = new Setting({
                contactNumber,
                whatsappNumber,
                email
            });
        } else {
            setting.contactNumber = contactNumber || setting.contactNumber;
            setting.whatsappNumber = whatsappNumber || setting.whatsappNumber;
            setting.email = email || setting.email;
        }

        const updatedSetting = await setting.save();
        res.json(updatedSetting);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
