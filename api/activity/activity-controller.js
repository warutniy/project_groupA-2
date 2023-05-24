const validator = require("validator");
const ActivityModel = require('./activity-model');

class ActivityController {

    getActivity = async (req, res) => {
        try {
            const { _id } = req.user;

            const userActivity = await ActivityModel.find({ userID: _id }).sort({ updated_dateTime: "desc" });

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
                distance
            } = req.body;

            //validate activity name
            if (activityName.trim() === '') {
                throw new Error('activity name is required');
            };

            //validate date
            const isDate = validator.isDate(date);
            if (!isDate) {
                throw new Error('birth date is not valid');
            };

            //validate start time and finish time
            if (startTime.trim() === '') {
                throw new Error('start time is required');
            };
            if (finishTime.trim() === '') {
                throw new Error('finish time is required');
            };

            //validate activity type
            if (activityType.trim() === "") {
                throw new Error('activity type is required');
            };

            //validate distance
            const isDistanceNum = validator.isNumeric(String(distance));
            if (!isDistanceNum) {
                throw new Error('distance is not a number');
            };
            

            // calculate duration of activity
            const [startHour, startMinute] = startTime.split(':').map(Number);
            const [finishHour, finishMinute] = finishTime.split(':').map(Number);

            // calculate the duration in minutes
            const durationMs = (finishHour - startHour) * 60 + (finishMinute - startMinute);

            // calculate the duration in hours and minutes
            let hours = Math.floor(durationMs / (60));
            let minutes = Math.floor((durationMs % (60)));

            if (hours === 0) {
                hours = "00";
            } else if (hours < 10) {
                hours = `0${hours}`;
            };

            if (minutes === 0) {
                minutes = "00"
            } else if (minutes < 10) {
                minutes = `0${minutes}`;
            };

            // display the duration
            const duration = `${hours}:${minutes}:00`;

            const created_dateTime = new Date();
            const updated_dateTime = new Date();
            
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
                created_dateTime,
                updated_dateTime
              });
            await newActivity.save();
            // console.log(newActivity);

            // send response
            res.status(200).json({
                activityId: newActivity._id,
                activity: newActivity,
                message: 'Create Activity Card Success!',
                error: false
            });

        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };

    updateActivity = async (req, res) => {
        try {
            const { activityID } = req.params;
            // console.log(activityID);

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
                distance
            } = req.body;
            
            //validate activity name
            if (activityName.trim() === '') {
                throw new Error('activity name is required');
            };

            //validate date
            const isDate = validator.isDate(date);
            if (!isDate) {
                throw new Error('date is not valid');
            };

            //validate start time and finish time
            if (startTime.trim() === '') {
                throw new Error('start time is required');
            };
            if (finishTime.trim() === '') {
                throw new Error('finish time is required');
            };

            //validate activity type
            if (activityType.trim() === "") {
                throw new Error('activity type is required');
            };

            //validate distance
            const isDistanceNum = validator.isNumeric(String(distance));
            if (!isDistanceNum) {
                throw new Error('distance is not a number');
            };
            
            // calculate duration of activity
            const [startHour, startMinute] = startTime.split(':').map(Number);
            const [finishHour, finishMinute] = finishTime.split(':').map(Number);

            // calculate the duration in minutes
            const durationMs = (finishHour - startHour) * 60 + (finishMinute - startMinute);

            // calculate the duration in hours and minutes
            let hours = Math.floor(durationMs / (60));
            let minutes = Math.floor((durationMs % (60)));

            if (hours === 0) {
                hours = "00";
            } else if (hours < 10) {
                hours = `0${hours}`;
            };

            if (minutes === 0) {
                minutes = "00"
            } else if (minutes < 10) {
                minutes = `0${minutes}`;
            };

            // display the duration
            const duration = `${hours}:${minutes}:00`;

            const updated_dateTime = new Date();

            // update activity
            const updatedActivity = await ActivityModel.findOneAndUpdate(
                { _id: activityID, userID: _id },
                {   
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
                    updated_dateTime
                },
                
                { new: true }
            );
            // console.log(updatedActivity);

            // send response
            res.status(200).json({
                activityId: updatedActivity._id,
                activity: updatedActivity,
                message: 'Update Activity Card Success!',
                error: false
            });

        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };

    deleteActivity = async (req, res) => {
        try {
            const { activityID } = req.params;
            const { 
                _id, 
                firstName, 
                lastName 
            } = req.user;
      
            const deletedActivity = await ActivityModel.findOneAndDelete({ _id: activityID, userID: _id });
            if (!deletedActivity) {
                res.status(400).json({ 
                    message: "Can Not Delete Activity Card!" 
                });
            };
            
            res.status(200).json({ 
                message: "Delete Activity Card Success!" 
            });
        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };
};

module.exports = new ActivityController();