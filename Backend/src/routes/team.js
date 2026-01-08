const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', teamController.getAllMembers);
router.get('/:id', teamController.getMemberById);
router.post('/', auth, upload.single('image'), teamController.createMember);
router.put('/:id', auth, upload.single('image'), teamController.updateMember);
router.delete('/:id', auth, teamController.deleteMember);

module.exports = router;