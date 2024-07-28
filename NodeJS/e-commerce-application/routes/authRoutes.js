const express = require('express');
const { register, login, logout, protect } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

// Protected route example
router.get('/profile', protect, (req, res) => {
    res.status(200).json({ success: true, data: req.user });
});

module.exports = router;
