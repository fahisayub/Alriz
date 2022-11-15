const mongoose= require("mongoose");

const masjidSchema=new mongoose.Schema({
    masjidName:{type:String, required:true},
    masjidAddress:{type:String, required:true},
    masjidRegistrationNo:{type:String, required:false},
    masjidLocation:{type:Geolocation, required:false}
});

const MasjidModel= mongoose.model('masjid',masjidSchema);

module.exports={
    MasjidModel,
}