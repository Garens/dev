/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_linkcontrolstep', {
    ControlStepID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'tb_linkcontrolstep'
  });
};
