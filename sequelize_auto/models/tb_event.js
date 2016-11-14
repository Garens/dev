/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_event', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DeptId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BeginTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Endtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StartStakeNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EndStakeNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Direction: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Death: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    GrievousWound: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FleashWound: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TrafficEffect: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EventTypeCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EventFromCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EventLevelID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EventRecord: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProcessMethod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EventProcess: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RecordUserID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RegisterTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_event'
  });
};
