const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    admin.lastLogin = new Date();
    await admin.save();

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (!existingAdmin) {
      const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
      await Admin.create({
        email: process.env.ADMIN_EMAIL,
        password: passwordHash,
        name: 'Admin User'
      });
      console.log('Default admin created');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

module.exports = { login, createDefaultAdmin };