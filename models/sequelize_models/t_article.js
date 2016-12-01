/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_article', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    click: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    top: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    show: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 't_article'
  });
};
