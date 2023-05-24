const express = require('express');
const activityController = require('./activity-controller');

const router = express.Router();

router.post('/create_card' , activityController.createActivity);
router.patch('/:activityID' , activityController.updateActivity);
router.delete("/:activityID", activityController.deleteActivity);
router.get('/getCard', activityController.getActivity);

module.exports = router;