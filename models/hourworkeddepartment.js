'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HourWorkedDepartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HourWorkedDepartment.init({
    data: DataTypes.DATEONLY,
    id_employee: DataTypes.INTEGER,
    id_department: DataTypes.INTEGER,
    id_department_employeed: DataTypes.INTEGER,
    hora: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'HourWorkedDepartment',
  });
  return HourWorkedDepartment;
};