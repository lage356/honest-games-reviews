const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Avatar extends Model {}

Avatar.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "avatar",
  }
);

module.exports = Avatar;
