// import express มาใช้
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const decodeMiddleware = require('./middleware/decode');
const authenRouter = require('./api/authen/authen-router');
const profileRouter = require("./api/profile/profile-router");

const port = 3000;
const ipAddress = "127.0.0.1";
const app = express();
app.use(cors());
app.use(cookieParser());

// body-parser
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello Fitbook");
});
app.use('/authen', authenRouter);
app.use(decodeMiddleware);
app.use("/profile", profileRouter);
// app.use('/activity', activityRouter);

const connect = async () => {

    try {
        // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
        await mongoose.connect(process.env.DATABASE_URI, {
          dbName: process.env.DATABASE_NAME,
          writeConcern: "majority",
          retryWrites: true,
          user: process.env.DATABASE_USER,
          pass: process.env.DATABASE_PASS,
        });

        console.log('connected');
      
        app.listen(port, ipAddress, () => {
            console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
            console.log(`Address: http://${ipAddress}:${port}`);
        });
      
    } catch (error) {
        console.error("Error connecting to the database or starting the server:", error);
    }
};

connect();


// เปิด server
