/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_subscribe', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Subtype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Subscribe: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'tb_subscribe'
  });
};
