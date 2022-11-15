 const mongoose = require("mongoose");

 const homeSchema=new mongoose.Schema({
    masjidId:{type:String,required:true},
    homeAddress:{type:String,required:true},
    homeNumber:{type:String,required:true},
    location:{type:Geolocation,required:true},
    
 });

 const HomeModel=mongoose.model('home',homeSchema);
 module.exports={
    HomeModel,
 }