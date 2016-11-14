/* jshint indent: 2 */

  var sequelize = require('../config');
  var DataTypes = require('Sequelize');

function User() {
  return sequelize.define('user', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
module.exports = User();
