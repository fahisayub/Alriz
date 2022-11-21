const { Router } = require("express");
const { MasjidController } = require("../controllers/masjid.controller");
const { authentication } = require("../middlewares/authentication.middleware");
 

 const MasjidRoutes=Router();

 MasjidRoutes.get('/',MasjidController.getAllMasjid);
 MasjidRoutes.get('/:id',MasjidController.getMasjid);
 MasjidRoutes.post('/add',MasjidController.addMasjid);
 MasjidRoutes.put('/:id',authentication,MasjidController.updateMasjid);
 module.exports={
    MasjidRoutes,
 }