const { getDB } = require("../config/sequelize");
const sequelize = getDB();
const { Model, DataTypes } = require("sequelize");

class Subscription extends Model{

}

Subscription.init(
    {
        idx:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        idx_user:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        tier:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        content_access:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: "Subscription",
        tableName: "subscriptions",
    }
);

module.exports = Subscription;
