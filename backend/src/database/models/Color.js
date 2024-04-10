module.exports = (sequelize, dataTypes) => {
    let alias = 'Colors'
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameColor: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    };
    let config = {
        tableName: 'colors',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false,
    };

    const Color = sequelize.define(alias, cols, config);

    Color.associate = (models) => {
        Color.hasMany(models.Products, {
            as: 'Products',
            foreignKey: 'idColor',
        });
    };
    return Color;
};
