const express = require('express');
const router = express.Router();

let indexController = require('../../controllers/API/APIindexController.js');

router.get('/', indexController.getHome);

module.exports = router;