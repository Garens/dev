/*
 ** 系统设置相关
*/
$(function(){
  var sysView = Backbone.View.extend({
    initialize:function(){
      this.renderSysMenu();
    },
    renderSysMenu:function(){
      $.get('/admin/getMenuList',function(data){
        var list = data.list;
        // console.log(list);
        for(var i in list){
          var item = list[i];
          var html = '';
          var subHtml = '';
          if(item.pid == '' || !item.pid){
            html = '<li>'+
              '<a href="javascript:;">'+
              '<i class="fa '+item.icon+'"></i>'+
              '<span class="title">'+item.name+'</span>'+
              '<span class="selected">'+
              '</span>'+
              '<span class="arrow">'+
              '</span>'+
              '</a>';
              for(var k in list){
                if(list[k].pid == item.id){
                  subHtml+='<li>'+
                      '<a class="ajaxify" href="'+list[k].url+'.html"><i class="fa '+list[k].icon+'"></i>'+list[k].name+'</a>'+
                    '</li>';
                }
              }
              for(var j in list){
                if(list[j].pid == item.id){
                  html+='<ul class="sub-menu">';
                  html+=subHtml;
                  html+='</ul>'
                  break;
                }
              }
          }
          $('#sysmenu').append(html);
        }
      })
    }
  });
  new sysView();
})
