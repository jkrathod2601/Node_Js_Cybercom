'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class randome_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  randome_table.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'randome_table',
  });
  return randome_table;
};