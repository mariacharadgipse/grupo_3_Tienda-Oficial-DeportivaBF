const { validationResult } = require('express-validator');
// const fs = require('fs');
// const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { filter } = require('../middlewares/validateProducts');

// const productsFilePath = path.join(__dirname, '../data/products.json');
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//====================0
const db = require('../database/models')
const Op = db.Sequelize.Op
//===========0


module.exports = {
	// const controller = {

	// Detail - Detail from one product - JSON

	// getDetail: (req, res) => {
	// 	const pSelected = products.find(product => product.id == req.params.id)
	// 	res.render('products/productDetail.ejs', { pSelected })
	// },

	// Detail - Detail from one product - Sequelize
	getDetail: async (req, res) => {
		try {
			const pSelected = await db.Products.findByPk(req.params.id);
			res.render('products/productDetail.ejs', { pSelected });
		} catch (error) {
			console.error(error);

		}
	},



	// Root - Show all products - BD JSON
	// getProducts: (req, res) => {
	// 	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	// 	res.render('products/produ.ejs', { products })
	// },


	// Root - Show all products - Sequelize
	getProducts: async (req, res) => {
		try {
			const products = await db.Products.findAll();
			res.render('products/produ.ejs', { products });

		} catch (error) {
			console.error(error);
		}
	},

	// productsList: (req, res) => {
	// 	db.Products.findAll({
	// 		res.render('products/produ.ejs', { products })
	// 	})
	// 		.then(function (clients) {
	// 			res.json(clients);
	// 		})
	// 		.catch(error => console.log(error))
	// },

	//Create - Form to create - BD JSON
	// getCreate: (req, res) => {
	// 	res.render('products/productCreate.ejs')
	// },

	//Create - Form to create - bd Mysql2 Sequelize
	getCreate: (req, res) => {
		res.render('products/productCreate.ejs')
	},

	// Create -  Method to store
	// postStore: (req, res) => {
	// 	console.log(req.body)
	// 	let results = validationResult(req)
	// 	// console.log('1- errors', results);
	// 	// console.log('-------------------------------');
	// 	// console.log('2- errors mapped', results.mapped());

	// 	if (results.isEmpty()) {
	// 		console.log(results)
	// 		// creamos nuevo producto del formulario con req.body
	// 		const newProduct = {
	// 			// id: products.length + 1,
	// 			id: uuidv4(), //id unico uuid
	// 			name: req.body.name || pToEdit.name,
	// 			description: req.body.description || pToEdit.description,
	// 			image: req.file?.filename || 'default.png', //imagen por defecto
	// 			category: req.body.category || pToEdit.category,
	// 			colors: req.body.colors || pToEdit.colors,
	// 			price: req.body.price || pToEdit.price,
	// 			discount: req.body.discount || pToEdit.discount,
	// 		}
	// 		// Agrego nuevo producto al listado
	// 		products.push(newProduct)
	// 		// Convertir a JSON y escribir el archivo js
	// 		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
	// 		// redireccionamos al listado de productos
	// 		res.redirect('/products')
	// 	} else {
	// 		console.log(results),
	// 			// res.render('product-create-form.ejs', {errors: results.errors, oldData: req.body})
	// 			res.render('products/productCreate.ejs', { errors: results.mapped(), oldData: req.body })
	// 	}
	// },

	// Update - Method to update - BD Mysql y JSON
	// postStore: async (req, res) => {
	// 	const results = validationResult(req);
	// 	// 	// console.log('1- errors', results);
	// 	// 	// console.log('-------------------------------');
	// 	// 	// console.log('2- errors mapped', results.mapped());
	// 	if (results.isEmpty()) {
	// 		console.log(results)
	// 		const newProduct = await db.Products.create({
	// 			id: uuidv4(), //id unico uuid
	// 			name: req.body.name,
	// 			description: req.body.description,
	// 			image: req.file?.filename || 'default.png',
	// 			idCategoryProduct: req.body.category,
	// 			price: req.body.price,
	// 			discount: req.body.discount,
	// 			idColor: req.body.color,

	// 		});

	// 		await newProduct.save();
	// 		res.redirect('/products');
	// 	} else {
	// 		console.log(results)
	// 		res.render('products/productCreate.ejs', {
	// 			errors: results.mapped(),
	// 			oldData: req.body,
	// 		});
	// 	}
	// },

	// Nuevo producto
	postStore: async (req, res) => {
		const { name, description, image, idCategoryProduct, price, discount, idColor } = req.body;

		try {
			const newProduct = await db.Products.create({
				name,
				description,
				image: req.file?.filename || 'default.png', // imagen por defecto
				idCategoryProduct,
				price,
				discount,
				idColor
			});
			console.log(newProduct)
			res.redirect('/products');

		} catch (error) {
			console.log(error);
			res.render('products/productCreate.ejs', { newProduct });
		}
	},
	// Update - Form to edit - BD JSON
	// edit: (req, res) => {
	// 	const pToEdit = products.find(product => product.id == req.params.id)
	// 	res.render('products/productEdit.ejs', { pToEdit })
	// },


	// Update - Form to edit - BD Mysql con Sequelize
	edit: async (req, res) => {
		const id = parseInt(req.params.id);

		try {
			const pToEdit = await db.Products.findOne({ where: { id } });

			if (!pToEdit) {
				return res.status(404).send('Product not found.');
			}
			res.render('products/productEdit.ejs', { pToEdit })

		} catch (err) {
			console.error(err);
			res.status(500).send('Server error.');
		}
	},


	// Update - Method to update - BD JSON
	// update: (req, res) => {
	// 	let results = validationResult(req)
	// 	console.log('1- errors', results);
	// 	console.log('-------------------------------');
	// 	console.log('2- errors mapped', results.mapped());
	// 	if (results.isEmpty()) {
	// 		// JSON de productos
	// 		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	// 		// Buscar el producto a editar
	// 		const pToEdit = products.find(product => product.id == req.params.id)
	// 		// Actualiza o deja el valor original del producto
	// 		pToEdit.name = req.body.name || pToEdit.name
	// 		pToEdit.price = req.body.price || pToEdit.price
	// 		pToEdit.discount = req.body.discount || pToEdit.discount
	// 		pToEdit.category = req.body.category || pToEdit.category
	// 		pToEdit.description = req.body.description || pToEdit.description
	// 		pToEdit.image = req.file?.filename || pToEdit.image
	// 		pToEdit.colors = req.body.colors || pToEdit.colors
	// 		// Escribe el nuevo JSON de productos
	// 		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
	// 		res.redirect('/products')
	// 	} else {
	// 		console.log(results),
	// 			// res.render('productEdit.ejs', {errors: results.errors, oldData: req.body})
	// 			res.render('products/productEdit.ejs', { errors: results.mapped(), oldData: req.body })
	// 	}

	// },

	// Update - Method to update
	update: async (req, res) => {
		let results = validationResult(req);
		if (results.isEmpty()) {
			try {
				// Buscar el producto a editar
				const pToEdit = await db.Products.findByPk(req.params.id);
				// Actualiza o deja el valor original del producto
				pToEdit.name = req.body.name || pToEdit.name;
				pToEdit.price = req.body.price || pToEdit.price;
				pToEdit.discount = req.body.discount || pToEdit.discount;
				pToEdit.idCategoryProduct = req.body.category || pToEdit.category;
				pToEdit.description = req.body.description || pToEdit.description;
				pToEdit.image = req.file?.filename || pToEdit.image;
				pToEdit.idColor = req.body.idColor || pToEdit.idColor;
				// Guarda los cambios en la base de datos
				await pToEdit.save();
				res.redirect('/products');
			} catch (error) {
				console.log(error);
				res.status(500).send('Server Error');
			}
		} else {
			console.log(results);
			res.render('products/productEdit.ejs', { errors: results.mapped(), oldData: req.body });
		}
	},


	// getCart: (req, res) => {
	// 	// Lógica del controlador para la página de inicio
	// 	const pSelected = products.find(product => product.id == req.params.id)
	// 	console.log(pSelected)
	// 	res.render('products/productCart', { pSelected }); // Renderiza la plantilla 'productCart.ejs' en la carpeta 'views'
	// },

	// getCart: (req, res) => {
	// 	// Lógica del controlador para la página de inicio
	// 	const pSelected = products.find(product => product.id == req.params.id)
	// 	console.log(pSelected)
	// 	res.render('products/productCart.ejs', { pSelected }); // Renderiza la plantilla 'productCart.ejs' en la carpeta 'views'
	// 	//res.render('/products/productCart');
	// },

// Root - Show productCart - Sequelize
getCart: async (req, res) => {
	try {
		const pSelected = await db.Products.findByPk(req.params.id);
		res.render('products/productCart.ejs', { pSelected });

	} catch (error) {
		console.error(error);
	}
},


	// deleDestroy1: (req, res) => {
	// 	const id = req.params.id;
	// 	let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	// 	products = products.filter(product => product.id != id)
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
	// 	res.redirect('/products')
	// },

	// Elminar producto por id
	deleDestroy: async (req, res) => {
		const { id } = req.params;
		try {
			await db.Products.destroy({ where: { id: id } });
			res.json({ message: `El producto con id ${id} se eliminó` });
		} catch (error) {
			console.log(error);
		}
	},
};

// module.exports = controller;
