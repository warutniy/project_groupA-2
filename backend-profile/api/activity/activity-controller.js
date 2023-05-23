const ActivityModel = require('./activity-model');
const { DateTime } = require('luxon');

class ActivityController {

    getActivity = async (req, res) => {
        try {
            const { _id } = req.user;

            const userActivity = await ActivityModel.find({ userID: _id });

            return res.status(200).json({ user: userActivity });
        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };

    createActivity = async (req, res) => {
        try {
            const { 
                _id, 
                firstName, 
                lastName 
            } = req.user;

            const {
                activityName,
                date,
                description,
                startTime,
                finishTime,
                activityType,
                distance,
            } = req.body;
            // console.log(startTime)
            // console.log(`Date: ${date}`);

            const [startHour, startMinute] = startTime.split(':').map(Number);
            const [finishHour, finishMinute] = finishTime.split(':').map(Number);
            // Calculate the duration in milliseconds
            const durationMs =
            (finishHour - startHour) * 3600000 +
            (finishMinute - startMinute) * 60000;
            // Calculate the duration in hours, minutes, and seconds
            const hours = Math.floor(durationMs / (1000 * 60 * 60));
            const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
            // Display the duration
            // console.log(`Duration: ${hours} hours, ${minutes} minutes.`);
            const duration = `${hours}:${minutes}`;
            
            // create activity
            const newActivity = new ActivityModel({
                userID: _id,
                firstName, 
                lastName, 
                activityName,
                date,
                description,
                startTime,
                finishTime,
                activityType,
                duration,
                distance,
              });
            await newActivity.save();
            // console.log(newActivity);

            return res.status(200).send('create activity card successfully');

        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };
};

module.exports = new ActivityController();