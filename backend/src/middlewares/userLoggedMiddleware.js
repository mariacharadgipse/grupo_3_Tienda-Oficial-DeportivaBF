module.exports = (req, res, next) => {
    if(!req.session.userLogged){
        console.log('No eres tú? Andá al login');
        return res.redirect('/users/login')
    }

    console.log('Pasaste esta verificación, estás logueado');
    next()
}