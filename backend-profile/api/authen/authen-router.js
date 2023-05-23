const express = require('express');
const AuthenController = require('./authen-controller');

const router = express.Router();

router.post('/register', AuthenController.register);
router.post('/login', AuthenController.login);

module.exports = router;