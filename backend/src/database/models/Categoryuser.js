module.exports = (sequelize, DataTypes) => {
    let alias = 'Categoryusers'
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameCategoryUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'categoryusers',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false,
    };

    const Categoryuser = sequelize.define(alias, cols, config);

    Categoryuser.associate = function (models) {
        Categoryuser.hasMany(models.Users, {
            as: "Users",
            foreignKey: "idcategoryUser",
        });
    };

    return Categoryuser;
};
