const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
  email: {type:String, required:true},
  password: {type:String, required:true},
  username: {type:String, required:true},
  homeId: {type:String, required:false},
  role:{type:String,default:"user"} // 'imam' or 'home_admin' or 'masjid_admin' or 'user'
});

const UserModel=mongoose.model('user',userSchema);

module.exports={
    UserModel
}
