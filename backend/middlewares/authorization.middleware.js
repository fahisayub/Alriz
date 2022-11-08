const { UserModel } = require("../models/user.model");

const authorisation=(permittedroles)=>{
    return async(req,res,next)=>{
        let email=req?.body?.email;
        try{
           let user= await UserModel.findOne({email:email});
           let role=user.role;
           if(permittedroles.includes(role)){
            next();
           }else{
            res.send('User not authorised')
           }
        }catch(e){
            console.log(e);
            res.send('user is not authenticated')
        }
    }
}

module.exports={
    authorisation
}