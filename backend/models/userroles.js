'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userroles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Userroles.init({
    name: DataTypes.STRING,
    active: DataTypes.INTEGER,
    order_num: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Userroles',
  });
  return Userroles;
};