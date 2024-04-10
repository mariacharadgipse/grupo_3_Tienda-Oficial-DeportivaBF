const { body } = require('express-validator')

module.exports = [
    body('firstName')
        .notEmpty().withMessage('Debes ingresar un nombre').bail(),
    body('lastName')
        .notEmpty().withMessage('Debes ingresar un apellido').bail(),
    body('email')
        .isEmail().withMessage('Ingresa un email').bail(),  
    body('password')
        .notEmpty().withMessage('Ingresa una contraseña').bail(),


    // body('idColor')
    //     .notEmpty().withMessage('Ingresa un color'),
]