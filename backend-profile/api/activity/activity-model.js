const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
  },
    firstName: { type: String, required: true, ref: "user" },
    lastName: { type: String, required: true, ref: "user" },
    activityName: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
    startTime: { type: String, required: true },
    finishTime: { type: String, required: true },
    // startTime: { type: Date, required: true },
    // finishTime: { type: Date, required: true },
    activityType: { type: String, enum: ['Running', 'Walking', 'Biking', 'Swimming', 'Badminton'], required: true },
    duration: { type: String },
    distance: { type: Number },
  }
);

const ActivityModel = mongoose.model('Activity', ActivitySchema);

module.exports = ActivityModel;