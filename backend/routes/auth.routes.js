const { Router } = require("express");
const { AuthController } = require("../controllers/auth.controller");
const { authentication } = require("../middlewares/authentication.middleware");
 

 const AuthRoutes=Router();

 AuthRoutes.post('/signup',AuthController.signup);
 AuthRoutes.post('/signin',AuthController.signin);
 AuthRoutes.get('/profile',authentication,AuthController.getProfile);
 module.exports={
    AuthRoutes,
 }