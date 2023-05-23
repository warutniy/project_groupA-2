const jwt = require('jsonwebtoken');
const UserModel = require('../api/authen/user-model');

module.exports = async function (req, res, next) {

    try {
        // get token from header
        const { authorization } = req.headers;

        if (!authorization) {
            throw new Error('Access denied naja');
        };

        const token = authorization?.replace('Bearer ', '');
        
        if (!token) {
            throw new Error('Access denied');
        } else {
            // verify token
            const privateKey = process.env.JWT_SECRET_KEY || "KeyInw";
            const payload = jwt.verify(token, privateKey);

            // find user by userID
            const userId = payload.userId;
            const user = await UserModel.findById({ _id: userId }, { password: 0 });

            if (!user) {
                throw new Error('Access denied');
            };

            req.user = user;

            // call next middleware
            next();
        };
    } catch (error) {
        console.log(error);
        return res.status(400).send('Access denied')
    };

};