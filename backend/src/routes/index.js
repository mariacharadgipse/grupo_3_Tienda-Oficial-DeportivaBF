const express = require('express');
const router=express.Router();

let indexController=require('../controllers/indexController.js');

router.get('/', indexController.getHome);

module.exports=router;