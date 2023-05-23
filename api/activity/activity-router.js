const express = require('express');
const activityController = require('./activity-controller');

const router = express.Router();

router.post('/create_card' , activityController.createActivity);
router.get('/getCard', activityController.getActivity);

module.exports = router;