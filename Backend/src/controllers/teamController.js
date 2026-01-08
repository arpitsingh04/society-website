const TeamMember = require('../models/TeamMember');
const path = require('path');
const fs = require('fs');

exports.getAllMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMember = async (req, res) => {
  try {
    const memberData = { ...req.body };
    if (req.file) {
      memberData.image = req.file.filename;
    }
    const member = new TeamMember(memberData);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    const updateData = { ...req.body };
    if (req.file) {
      if (member.image) {
        const oldImagePath = path.join(__dirname, '../../uploads', member.image);
        if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      }
      updateData.image = req.file.filename;
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    if (member.image) {
      const imagePath = path.join(__dirname, '../../uploads', member.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};