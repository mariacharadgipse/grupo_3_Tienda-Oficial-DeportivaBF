// ************ Require's ************
const express = require('express');
const router = express.Router();

// multer middleware
const uploadProduct = require('../../middlewares/multer.js').uploadProduct;

const validateProducts = require('../../middlewares/validateProducts');




// ************ Controller Require ************
let APIproductController = require('../../controllers/API/APIproductController.js');

/*** GET ALL PRODUCTS http://localhost:5000/products ***/
router.get('/', APIproductController.getProducts);

// /*** CREATE ONE PRODUCT http://localhost:5000/products/create ***/
// router.get('/create', APIproductController.getCreate);
// router.post('/create', uploadProduct.single('image'), validateProducts, APIproductController.postStore);


router.get('/detail/:id', APIproductController.getDetail);
router.get('/cart/:id', APIproductController.getCart);
// router.get('/', APIproductController.articlesInDb);

/*** EDIT ONE PRODUCT http://localhost:5000/products/edit/1 ***/
router.get('/edit/:id', APIproductController.edit);
router.put('/edit/:id', uploadProduct.single('image'), validateProducts, APIproductController.update);

// router.delete('/delete/:id', APIproductController.deleDestroy)


module.exports = router;

