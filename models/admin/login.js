
var gmodel = require('../model');

exports.checkLogin = function(data,callback) {
  gmodel.User.findOne({where:{
    username:data.username,
    password:data.password
  }}).then(function (res){
    callback(null,res);
  },function(err){
    callback(err,null);
  });
}
