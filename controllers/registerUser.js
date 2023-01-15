const UserModel =require("../models/userSchema")

function RegisterUser(req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let userdata = {
        username: username,
        email: email,
        password:password
    }
    let resultData = new UserModel(userdata);
    resultData.save().then(item => {
        res.send("user added successfully")
    }).catch((err) => {
        console.log("error in adding data");
    })
}



module.exports = RegisterUser;