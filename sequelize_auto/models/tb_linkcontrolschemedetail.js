/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_linkcontrolschemedetail', {
    LinkControlDetailID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LinkControlCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EventLevelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ControlStepId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceControlType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TransState: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_linkcontrolschemedetail'
  });
};
