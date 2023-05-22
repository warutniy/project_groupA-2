const ProfileModel = require('./profile-model');

class ProfileController {

    getProfile = async (req, res) => {
        try {
            const { _id } = req.user;

            const userProfile = await ProfileModel.findOne({ userID: _id });

            return res.status(200).json({ user: userProfile });
        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };

    getUser = async (req, res) => {
        try {
            return res.status(200).json({ user: req.user });
        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };

    createProfile = async (req, res) => {
        try {
            const { 
                _id, 
                firstName, 
                lastName 
            } = req.user;

            const {
                birthDate,
                gender,
                height,
                weight
            } = req.body;

            // calculate age
            const calculateAge = (dateOfBirth) => {
                const birthDate = new Date(dateOfBirth);
                const currentDate = new Date();
              
                let age = currentDate.getFullYear() - birthDate.getFullYear();
              
                // Check if the birthday hasn't occurred yet in the current year
                if (
                  currentDate.getMonth() < birthDate.getMonth() ||
                  (currentDate.getMonth() === birthDate.getMonth() &&
                    currentDate.getDate() < birthDate.getDate())
                ) {
                  age--;
                }
              
                return age;
            };

            const age = calculateAge(birthDate);

            // create profile
            const newProfile = new ProfileModel({
                userID: _id,
                firstName,
                lastName,
                birthDate,
                gender,
                height,
                weight,
                age
              });
            await newProfile.save();
            // console.log(newProfile);

            return res.status(200).send('create profile successfully');

        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };
};

module.exports = new ProfileController();