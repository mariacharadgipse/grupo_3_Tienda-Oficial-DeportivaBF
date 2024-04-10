// ************ Require's ************
const express = require('express');
const router = express.Router();

// multer middleware
const uploadProduct = require('../middlewares/multer').uploadProduct;

const validateProducts = require('../middlewares/validateProducts');




// ************ Controller Require ************
let productController = require('../controllers/productController.js');

/*** GET ALL PRODUCTS http://localhost:5000/products ***/
router.get('/', productController.getProducts);

/*** CREATE ONE PRODUCT http://localhost:5000/products/create ***/
router.get('/create', productController.getCreate);
router.post('/create', uploadProduct.single('image'), validateProducts, productController.postStore);


router.get('/detail/:id', productController.getDetail);
router.get('/cart/:id', productController.getCart);

/*** EDIT ONE PRODUCT http://localhost:5000/products/edit/1 ***/
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', uploadProduct.single('image'), validateProducts, productController.update);

router.delete('/delete/:id', productController.deleDestroy)


module.exports = router;

