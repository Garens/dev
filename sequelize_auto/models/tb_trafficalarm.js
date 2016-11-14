/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_trafficalarm', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CameraId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direction: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LaneNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EventType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LocatinX0: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LocatinY0: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LocatinX1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LocatinY1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VideoURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PictureURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PictureName1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PictureName2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PictureName3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PictureName4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PictureTime1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PictureTime2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PictureTime3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PictureTime4: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_trafficalarm'
  });
};
