const UserModel =require("../models/userSchema")
 
function loginUser(req, res) {
    var uname = req.body.email;
    var pwd = req.body.password;
    UserModel.findOne({email:uname}, function(err,myuser){
      if(!err){
        if(myuser.password===pwd){
          res.send("login complete");
        }
      }else{
        console.log(err);
      }
    })
};


module.exports = loginUser;