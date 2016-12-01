/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_type', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 't_type'
  });
};
