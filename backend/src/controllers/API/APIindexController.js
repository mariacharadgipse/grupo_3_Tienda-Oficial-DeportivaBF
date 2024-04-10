const db = require('../../database/models/')
const Op = db.Sequelize.Op

module.exports = {

  getHome: async (req, res) => {
    try {
      const inDiscount = await db.Products.findAll({
        where: {
          discount: { [Op.gt]: 0 }
        }

      });
      res.json({ inDiscount })
    } catch (error) {
      console.log(error);
    }


  }
};

