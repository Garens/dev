
var Sequelize = require('sequelize');
var sequelize = require('./conn');

var t_user = require('./sequelize_models/t_user');

var User = t_user(sequelize,Sequelize);

exports.User = User;
