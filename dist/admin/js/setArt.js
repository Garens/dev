/*
 ** 文章管理
*/
$(function(){
  var setArt = Backbone.View.extend({
    el:$('body'),
    events:{
      'click #addArtType':'addArtType'
    },
    initialize:function(){
      // this.initTypeTable();
    },
    initTypeTable:function(){
      $("#tabArtTypeList").DataTable({
        'destroy': true,
        'processing': true,
        'serverSide': true,
        rowNumber:true,
        'language': {
            'url':'/cn.json'
        },
        'aLengthMenu': [5, 10, 20, 30],
        'ajax': {
            'url': '/admin/getTypeListPage',
            'dataType': 'json',
            'type':'get'
        },
        "columns": [
          {"title": '分类名称','orderable':false,mDataProp:function(data){
            var pid = data.pid;
            var html = '';
            if(!pid && pid!=null){
              html+='|-';
            }
            return html+data.name;
          }},
          {"title": '别名','orderable':false,'mDataProp':'alias'},
          {"title": '描述','orderable':false,'mDataProp':'desc'},
          {"title": '操作','orderable':false,'width':'250',mDataProp:function(lineData){
            // console.log(lineData);
                var id = lineData.id;
                var del = '<a href="javascript:;" class="btn btn-xs red"><i class="fa fa-trash-o"></i> 删除</a>';
                var edit = '<a href="javascript:;" class="btn btn-xs blue" title="编辑"><i class="fa fa-edit"></i> 编辑</a>';
                return edit+" "+ del;
            }}
        ],
      });
    },
    addArtType:function(){
      var _this = this;
      var formData = getFormJson($('#formArtType'));
      $.post('/admin/addArtType',formData,function(data){
        if(data.flag){
          $('#formArtType')[0].reset();
          $('#addTypeModal').modal('hide');
          _this.initTypeTable();
        }
      })
    }
  });
  window.setArt = new setArt();
})
