const router = require('express').Router();
const AuthenController = require('./authen-controller')

router.post('/login', (req, res) => {
    console.log(req.body)
    res.send('hello login')
})

router.post('/register', AuthenController.register)

module.exports = router