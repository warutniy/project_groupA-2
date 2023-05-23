const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('./user-model');

class AuthenController {

    register = async (req, res) => {
        // 1.เช็กข้อมูลว่าซ้ำมั้ย / email ซ้ำมั้ย
        // 2. ซ้ำ ส่ง response กลับไปว่าซ้ำ
        // 3. ไม่ซ้ำ บันทึกลง db
        // 3.1 ส่ง response กลับไปว่า success
        try {
            const {
                email,
                password,
                confirmPassword,
                firstName,
                lastName
            } = req.body;

            //validate email
            const isEmail = validator.isEmail(email);
            if (!isEmail) {
                throw new Error('email address is not correct');
            };

            //validate password
            if (password !== confirmPassword) {
                throw new Error('confirm password did not match');
            };

            //validate firstName and lastName
            if (firstName.trim() === '') {
                throw new Error('firstName is required');
            };
            if (lastName.trim() === '') {
                throw new Error('lastName is required');
            };

            // check if email is valid
            const foundUser = await UserModel.findOne({ email });
            if (foundUser) {
                console.log(foundUser)
                throw new Error('email is not available');
            };

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // register
            const newUser = new UserModel({
                email,
                password: hashedPassword,
                firstName,
                lastName
              });
            await newUser.save();
            
            // remove the password
            const sendUser = newUser.toObject();
            delete sendUser.password;

            // send response
            res.status(200).json({
                userId: newUser._id,
                user: sendUser,
                message: 'Signup Success!',
                error: false
            });
        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };


    login = async (req, res) => {

        try {
            const {
                email,
                password
            } = req.body;

            //validate email
            const isEmail = validator.isEmail(email);
            if (!isEmail) {
                throw new Error('email address is not correct');
            };

            //validate password
            if (password.trim() === '') {
                throw new Error('password is required');
            };

            // check if email is not valid
            const foundUser = await UserModel.findOne({ email });
            // console.log(foundUser)
            if (!foundUser) {
                throw new Error('email is not valid');
            }; 

            // compare password
            const hashedPassword = foundUser.password;
            // console.log(hashedPassword);
            const isCorrect = await bcrypt.compare(password, hashedPassword);
            if (!isCorrect) {
                throw new Error('email or password is not correct');
            };

            // generate token
            const genToken = (payload) => {
                const privateKey = process.env.JWT_SECRET_KEY || "KeyInw";
                const options = { expiresIn: 60 * 60 * 6 }; //1s
                const token = jwt.sign(payload, privateKey, options);
                return token;
            };
            const { _id, firstName, lastName } = foundUser;
            const payload = { userId: _id, firstName, lastName };
            const token = genToken(payload);

            // res.cookie("authorization", token, {
            //     secure: true,
            //     httpOnly: true,
            //     sameSite: 'strict',
            //     maxAge: 60 * 60 * 24 * 30,
            //     domain: 'http://localhost:5173',
            //     path: '/login'
            // });

            // res.setHeader('set-cookie', 'foo=bar');
            // res.cookie('fooooo', 'barrrrr');

            // remove the password
            const sendUser = foundUser.toObject();
            delete sendUser.password;

            // send response
            res.status(200).json({
                userId: foundUser._id,
                user: sendUser,
                token,
                message: 'Login Success!',
                error: false,
            });
        } catch (error) {
            console.log(error);
            return res.status(400).send('internal error');
        };
    };


};

module.exports = new AuthenController();