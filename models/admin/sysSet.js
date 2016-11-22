
var gmodel = require('../model');

exports.getMenuList = function(data,callback) {
  gmodel.Nav.findAll({
    where:{
      hide:'n'
    },
    order:['sort']
  }).then(function (res){
    callback(null,res);
  },function(err){
    callback(err,null);
  });
}
