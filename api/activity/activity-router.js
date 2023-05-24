const express = require('express');
const activityController = require('./activity-controller');

const router = express.Router();

router.get('/getCard', activityController.getActivity);
router.post('/create_card' , activityController.createActivity);
router.patch('/:activityID' , activityController.updateActivity);

module.exports = router;