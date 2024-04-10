module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoryproducts';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameCategoryProduct: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'categoryproducts',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false,
    };

    const Categoryproduct = sequelize.define(alias, cols, config);

    Categoryproduct.associate = function (models) {
        Categoryproduct.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'idCategoryProduct'
        });
    };

    return Categoryproduct;
};
