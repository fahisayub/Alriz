const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
  email: String,
  password: String,
  username:String,
  role:{type:String,default:"user"}
});

const UserModel=mongoose.model('user',userSchema);

module.exports={
    UserModel
}
