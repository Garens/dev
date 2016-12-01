/*
 ** 系统设置相关
*/
$(function(){
  var setMenu = Backbone.View.extend({
    initialize:function(){
      this.initMenuTable();
    },
    initMenuTable:function(){
      console.log(111);
      // var grid = new Datatable();
      $("#tabSetMenu").DataTable({
        'destroy': true,
        'processing': true,
        'serverSide': true,
        rowNumber:true,
        'language': {
            'url':'/cn.json'
        },
        'aLengthMenu': [5, 10, 20, 30],
        'ajax': {
            'url': '/admin/getMenuListPage',
            'dataType': 'json',
            'type':'get'
        },
        "columns": [
          {"title": '标题','orderable':false,mDataProp:function(data){
            var pid = data.pid;
            var html = '';
            if(pid!=0){
              html+='|-';
            }
            return html+data.name;
          }},
          {"title": '地址','orderable':false,'mDataProp':'url'},
          {"title": '图标','orderable':false,'mDataProp':'icon'},
          {"title": '操作','orderable':false,'width':'250',mDataProp:function(lineData){
            // console.log(lineData);
                var id = lineData.id;
                // var rowId ='<input type="text" value="'+devid+'" style="display:none;" class="getId"/>'
                var del = '<a href="javascript:;" class="btn btn-xs red"><i class="fa fa-trash-o"></i> 删除</a>';
                var edit = '<a href="javascript:;" class="btn btn-xs blue" title="编辑"><i class="fa fa-edit"></i> 编辑</a>';

                // var info = '<a href="javascript:;" class="DevInfo" title="详情"><i class="fa fa-file-text-o"></i></a>';
                return edit+" "+ del;
            }}
        ],
      });
      // $.get('/admin/getMenuList',function(data){
      //   var list = data.list;
      //   console.log(list);
      // })
    }
  });
  new setMenu();
})
