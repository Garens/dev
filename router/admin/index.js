var express = require('express'),
    router = express.Router();

var Login = require('../../models/admin/login');
var sysSet = require('../../models/admin/sysSet');
var artSet = require('../../models/admin/artSet');


router.get('/getMenuList',function(req,res){
  sysSet.getMenuList(req.query,function(err,data){
    if(err){
      return res.send({msg:err});
    }
    res.send({list:data});
  })
})

router.get('/getMenuListPage',function(req,res){
  sysSet.getMenuListPage(req.query,function(err,data){
    if(err){
      return res.send({msg:err});
    }
    console.log('22222=',data.count);
    res.send({draw:req.query.draw,recordsTotal:data.count,recordsFiltered:data.count,data:data.rows});
  })
})

router.get('/getTypeListPage',function(req,res){
  artSet.getTypeListPage(req.query,function(err,data){
    if(err){
      return res.send({msg:err});
    }
    res.send({draw:req.query.draw,recordsTotal:data.count,recordsFiltered:data.count,data:data.rows});
  })
})

router.post('/addArtType',function(req,res){
  artSet.addArtType(req.body,function(err,data){
    if(err){
      console.log('文章分类添加失败:',err);
      return res.send({flag:false,msg:'文章分类添加失败！'});
    }
    res.send({flag:true,data:data,msg:'添加成功！'});
  })
})



router.get('/', function(req, res) {
  // console.log(req.session);
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
