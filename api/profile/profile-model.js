const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "User"
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Female", "Male", "Other", "Prefer not to Answer"],
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
    },
    profilePhoto: {
        type: String,
    }
});

// Crate Model
const ProfileModel = mongoose.model("Profile", ProfileSchema);

// Export Model for another file use
module.exports = ProfileModel;