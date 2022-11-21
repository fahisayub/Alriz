const { Router } = require("express");
const { UserController } = require("../controllers/user.controller");
const { authentication } = require("../middlewares/authentication.middleware");
 

 const UserRoutes=Router();

 UserRoutes.post('/signup',UserController.signup);
 UserRoutes.post('/signin',UserController.signin);
 UserRoutes.get('/profile',authentication,UserController.getProfile);
 module.exports={
    UserRoutes,
 }