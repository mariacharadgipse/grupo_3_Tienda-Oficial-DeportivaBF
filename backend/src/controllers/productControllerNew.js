const { validationResult } = require('express-validator');

const db = require('../database/models')
const Op = db.Sequelize.Op

module.exports = {
    // Create - Method to store
    postStore: (req, res) => {
        console.log(req.body)
        let results = validationResult(req)
        // console.log('1- errors', results);
        // console.log('-------------------------------');
        // console.log('2- errors mapped', results.mapped());

        if (results.isEmpty()) {
            console.log(results)
            // creamos nuevo producto del formulario con req.body
            const newProduct = {
                // id: products.length + 1,
                id: uuidv4(), //id unico uuid
                name: req.body.name || pToEdit.name,
                description: req.body.description || pToEdit.description,
                image: req.file?.filename || 'default.png', //imagen por defecto
                category: req.body.category || pToEdit.category,
                colors: req.body.colors || pToEdit.colors,
                price: req.body.price || pToEdit.price,
                discount: req.body.discount || pToEdit.discount,
            }
            // Agrego nuevo producto al listado
            products.push(newProduct)
            // Convertir a JSON y escribir el archivo js
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
            // redireccionamos al listado de productos
            res.redirect('/products')
        } else {
            console.log(results),
                // res.render('product-create-form.ejs', {errors: results.errors, oldData: req.body})
                res.render('products/productCreate.ejs', { errors: results.mapped(), oldData: req.body })
        }

    },

};