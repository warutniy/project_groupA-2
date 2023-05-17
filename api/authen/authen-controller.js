const userModel = require('./user-model')

class AuthenController {

    async register(req, res) {
        // 1.เช็กข้อมูลว่าซ้ำมั้ย / email ซ้ำมั้ย
        // 2. ซ้ำ ส่ง response กลับไปว่าซ้ำ
        // 3. ไม่ซ้ำ บันทึกลง db
        // 3.1 ส่ง response กลับไปว่า success
        try {
            const { email, password, first_name, last_name } = req.body
            let newUserData
            const foundUser = await userModel.find({ email })
            if (foundUser.length !== 0) {
                console.log(foundUser)
                return res.status(400).send('email is not available')
            } else {
                const newUser = new userModel({
                    email: email,
                    password: password,
                    first_name: first_name,
                    last_name: last_name
                })
                newUserData = await newUser.save()
            }
            return res.send({ newUserData })
        } catch (error) {
           return res.send('internal error')
        }
    }


}

module.exports = new AuthenController()