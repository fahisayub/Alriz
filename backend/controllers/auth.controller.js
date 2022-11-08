const { UserModel } = require("../models/user.model");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



const signup=async(req,res)=>{
    let {email,password,username,role}=req?.body;
    let user=await UserModel.findOne({email: email});
    if(user){
        console.log('user already exists');
        res.send({"msg":'user already exists'});
    }else{
        bcrypt.hash(password,3,async(err,encpassword)=>{
            if(err){
            console.log('somthing went wrong!')
                res.send({'msg':'somthing went wrong!'})
            }
            let encriptedData={
                email:email,password:encpassword,username,role
            }
          let user=  await UserModel.insertMany([encriptedData]);
            res.send({'msg':`account creted successfully ${user}`});
        })

    }

}

const signin=async(req,res)=>{
    let {email,password}=req.body;
    let user= await UserModel.findOne({email});
    let hashpassword=user.password;
    bcrypt.compare(password,hashpassword,(err,result)=>{
        if(result){
            const token=jwt.sign({email},process.env.SECRET_KEY,{expiresIn:'1h'});
            console.log('message:login succesfull');
            res.send({'token':`${token}`});

        }else{
            console.log('invalid user credentials');
            console.log(err);
            res.send({'msg': 'invalid user credentials'});
        }
    })

}
const getProfile=async (req,res)=>{
    let email=req.body.email;
    const  user= await UserModel.findOne({email:email})
    const result={
        email:user.email,id:user._id,username:user.username,role:user.role,
    }
    res.send(result)
}



const AuthController={
    signup,signin,getProfile,
}

module.exports={
    AuthController,
}
