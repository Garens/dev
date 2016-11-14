var express = require('express'),
    router = express.Router();

var Login = require('../../models/admin/login');


router.get('/', function(req, res) {
  console.log(req.session);
  if(req.session.user){
    res.render('admin/desktop',{
      title:'后台管理首页面',
      session:req.session.user,
      copyright:'网站 v1.0  © 2016 守护者 昆ICP证88888888号'
    });
  }else{
    res.render('admin/login',{
      title:'后台登录',
      copyright:'网站 v1.0  © 2016 守护者 昆ICP证88888888号'
    });
  }
});

router.get('/logout', function(req, res) {
  delete req.session.user;
  res.redirect('/admin');
});

router.post('/login',function(req,res){
  var params = req.body;
  Login.checkLogin(params,function(err,data){
    if(data){
      req.session.user = data.dataValues;
      res.redirect('/admin');
    }else{
      res.render('admin/login',{
        title:'后台登录',
        msg:'登录出错',
        copyright:'网站 v1.0  © 2016 守护者 昆ICP证88888888号'
      });
    }
  });
});

module.exports = router;
