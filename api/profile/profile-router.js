const express = require('express');
const profileController = require('./profile-controller');

const router = express.Router();

router.get('/getProfile', profileController.getProfile);
router.get('/getUser', profileController.getUser);
router.post('/create_profile' , profileController.createProfile);

module.exports = router;