module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        idCategoryProduct: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false,
        },
        discount: {
            type: dataTypes.DECIMAL(2, 1).UNSIGNED,
            allowNull: false,
        },
        idColor: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false,
    };

    const Product = sequelize.define(alias, cols, config);


    Product.associate = (models) => {
        Product.belongsTo(models.Categoryproducts, {
            as: 'categoryproduct',
            foreignKey: 'idCategoryProduct',
        });

        Product.belongsTo(models.Colors, {
            as: 'Color',
            foreignKey: 'idColor',
        });
    };
    return Product;
};
