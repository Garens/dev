/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_linkcontrolscheme', {
    TunnelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LinkControlCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AreaId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EventTypeCode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    EventSubTypeCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EventLevelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TransState: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_linkcontrolscheme'
  });
};
