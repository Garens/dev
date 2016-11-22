
var Sequelize = require('sequelize');
var sequelize = require('./conn');

var t_user = require('./sequelize_models/t_user');
var t_nav = require('./sequelize_models/t_nav');

var User = t_user(sequelize,Sequelize);
var Nav = t_nav(sequelize,Sequelize);

exports.User = User;
exports.Nav = Nav;
