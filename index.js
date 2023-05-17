// import express มาใช้
const express = require('express');
const app = express();
const mongoose = require('mongoose')


// body-parser
app.use(express.json())

const start = async () => {
    await mongoose.connect(
        '<your mongodb url>'
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
