const db = require('../database/models');
const sequelize = db.sequelize;


const categoryController = {
    'list': (req, res) => {
        db.Categoryproducts.findAll()
            .then(categories => {
                res.json({ categories })
            })
    },
    'detail': (req, res) => {
        db.Categoryproducts.findByPk(req.params.id)
            .then(category => {
                res.render({ category });
            });
    }

}

module.exports = categoryController;