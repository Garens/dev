

function getFormJson(form) {
  var data = {};
  var a = $(form).serializeArray();
  $.each(a, function () {
    if (data[this.name] !== undefined) {
      if (!data[this.name].push) {
      data[this.name] = [data[this.name]];
      }
      data[this.name].push(this.value || '');
    }else{
      data[this.name] = this.value || '';
    }
  });
  return data;
}
