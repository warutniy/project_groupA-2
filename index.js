// import express มาใช้
const express = require('express');
const app = express();
const mongoose = require('mongoose')

const authenRouter = require('./api/authen/authen-router')

// body-parser
app.use(express.json())
app.use('/authen', authenRouter)

const start = async () => {
    await mongoose.connect(
        '<your mongo connection string>'
    ).then(()=> {
        console.log('connected')
    }).catch((err)=>{
        console.log(err)
    })

    app.listen(3000, () => {
        console.log('Start server at port 3000.')
    })
}

start()


// เปิด server
