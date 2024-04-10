const express = require('express');
const router = express.Router();

// multer middleware
const uploadUser = require('../middlewares/multer').uploadUser;

const validateUsers = require('../middlewares/validateUsers');

//REGISTER

const { getRegister, postRegister } = require('../controllers/userController.js')

router.get('/register', getRegister);

router.post('/register', uploadUser.single('imageUser'), validateUsers, postRegister)




//LOGIN

let userController = require('../controllers/userController.js');
const { getLogin, postLogin, profile, logout } = require('../controllers/userController.js')
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware.js')

//Formulario de Login
router.get('/login', getLogin);

//Procesar el Login
router.post('/login', postLogin);

// Perfil de Usuario
router.get('/profile', userLoggedMiddleware, profile)

// Logout
router.get('/logout', userController.logout);
router.get('/logout', userLoggedMiddleware, logout)
module.exports = router;