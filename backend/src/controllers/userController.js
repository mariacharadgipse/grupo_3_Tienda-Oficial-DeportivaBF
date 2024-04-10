const { validationResult } = require('express-validator');
// const fs = require('fs')
// const path = require('path')
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')

// const usersPath = path.join(__dirname, '../data/users.json')
// const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

//====================0
const db = require('../database/models')
const Op = db.Sequelize.Op
//===========0

module.exports = {

	//REGISTER//
	getRegister: (req, res) => {
		// Lógica del controlador para la página de inicio
		res.render('users/register'); // Renderiza la plantilla 'register.ejs' en la carpeta 'views'
	},

	postRegister: async (req, res) => {
		try {
			// obtener la info del formulario
			let errors = validationResult(req);
			if (errors.isEmpty()) {
				const { email, password } = req.body;
				//console.log(email)
				//console.log(password)
				// el usuario no tiene que estar registrado
				const userFound = await db.Users.findOne({ where: { email: email } });
				//const userFound = await db.Users.findByPk(4);
				console.log(userFound)
				if (userFound) {
					return res.send('El usuario ya está registrado con ese email');
				}
				const { imageUser, firstName, lastName, idcategoryUser } = req.body;
				console.log('image:', imageUser);
				// debemos guardar ese nuevo usuario
				const newUser = await db.Users.create({
					email,
					imageUser: req.file?.filename || 'default.jpg', // imagen por defecto
					firstName,
					lastName,
					password: bcryptjs.hashSync(password, 10),
					idcategoryUser
				});
				console.log(newUser)
				// redirigir a home
				res.redirect('/');
			} else {
				res.render('users/register', {
					errors: errors.array(),
					old: req.body
				});
			};
		} catch (error) {
			console.error(error);
			res.status(500).send('Error al registrar el usuario');
		}
	},

	// 	//LOGIN//
	getLogin: (req, res) => {
		// Lógica del controlador para la página de inicio
		res.render('users/login'); // Renderiza la plantilla 'login.ejs' en la carpeta 'views'
	},

	postLogin: async (req, res) => {
		try {
			// obtener los datos del form
			let { email, password, rememberme } = req.body

			// buscar usuario en la base de datos
			const userFound = await db.Users.findOne({ where: { email: email } });

			if (userFound && bcryptjs.compareSync(password, userFound.password)) {
				// si existe, guardalo en session
				req.session.userLogged = userFound
				// el usuario puso recordarme?
				if (rememberme == 'on') {
					res.cookie('rememberme', userFound.email, { maxAge: 60000 * 60 })
				}
				// redireccione al home
				console.log('Todo salió ok, estas logueado');
				res.redirect('/users/profile')
			} else {
				//res.send('El password o email es incorrecto')//

				req.session.errorMessage = 'El password o email es incorrecto';
				res.redirect('/users/login');
				
			}
		} catch (error) {
			console.error(error);
			res.status(500).send('Error al procesar la autenticación');
		}
	},

	profile: (req, res) => {
		res.render('users/profile.ejs', { user: req.session.userLogged })
	},

	logout: (req, res) => {
		req.session.userLogged = undefined
		// req.session.destroy()
		res.clearCookie('rememberme')
		res.redirect('/')
	},
}
// const controller = {

// 	//REGISTER//
// 	getRegister: (req, res) => {
// 		// Lógica del controlador para la página de inicio
// 		res.render('users/register'); // Renderiza la plantilla 'register.ejs' en la carpeta 'views'
// 	},

// 	register: (req, res) => {
// 		res.render('users/register.ejs')
// 	},
// 	postRegister: (req, res) => {
// 		// obtener la info del formulario
// 		let { email, password } = req.body
// 		// el usuario no tiene que estar registrado
// 		let userFound = users.find(user => user.email == email)
// 		if (userFound) {
// 			return res.send('El usuario ya está registado con ese email')
// 		}
// 		// debemos guardar ese nuevo usuario
// 		let newUser = {
// 			id: uuidv4(),
// 			email: req.body.email,

// 			image: req.file?.filename || 'default.png', //imagen por defecto
// 			...req.body, // spread operator
// 			password: bcryptjs.hashSync(password, 10),
// 		}

// 		users.push(newUser)
// 		fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '))
// 		// redirigir a home
// 		res.redirect('/')
// 	},

// 	//LOGIN//
// 	//login: (req, res) => {
// 	//console.log(req.session?.userLogged);
// 	//res.render('users/login.ejs')
// 	//},

// 	getLogin: (req, res) => {
// 		// Lógica del controlador para la página de inicio
// 		res.render('users/login'); // Renderiza la plantilla 'login.ejs' en la carpeta 'views'
// 	},





// 	postLogin: (req, res) => {
// 		// obtener los datos del form
// 		let { email, password, rememberme } = req.body
// 		//  buscar usuario y checkear password y email si coincide con alguno de nuestra base
// 		let userFound = users.find(user => user.email == email)
// 		if (userFound && bcryptjs.compareSync(password, userFound.password)) {
// 			// si existe, guardalo en session
// 			req.session.userLogged = userFound
// 			// el usuario puso recordarme?
// 			if (rememberme == 'on') {
// 				res.cookie('rememberme', userFound.email, { maxAge: 60000 * 60 })
// 			}
// 			// redireccione al home
// 			console.log('Todo salió ok, estas logueado');
// 			res.redirect('/users/profile')
// 		} else {
// 			res.send('El password o email es incorrecto')
// 		}

// 	},
// 	profile: (req, res) => {
// 		res.render('users/profile.ejs', { user: req.session.userLogged })
// 	},


// 	logout: (req, res) => {
// 		req.session.userLogged = undefined
// 		// req.session.destroy()
// 		res.clearCookie('rememberme')
// 		res.redirect('/')
// 	},
// };



// module.exports = controller;