const { Router } = require("express");
const { HomeController } = require("../controllers/home.controller");
const { authentication } = require("../middlewares/authentication.middleware");
 

 const HomeRoutes=Router();

 HomeRoutes.get('/',HomeController.getAllHome);
 HomeRoutes.get('/:id',HomeController.getHome);
 HomeRoutes.post('/add',HomeController.addHome);
 HomeRoutes.put('/:id',authentication,HomeController.updateHome);
 module.exports={
    HomeRoutes,
 }