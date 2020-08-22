window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init:function () {
      var app_ID = 'zufcBlS3mzHl1PgiccUJefCK-gzGzoHsz'
      var app_Key = 'cpM3C7146DVEKj2aIURk3HFh'
      var server_url = 'https://zufcbls3.lc-cn-n1-shared.com'
      AV.init({appId: app_ID, appKey: app_Key, serverURL: server_url})
    },
    fetch:function () {
      var query =new AV.Query(resourceName)    //不写new的话，没有这个对象会找不到find方法
      return query.find()
    },
    save:function (object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object)
    }
  }
}

//var model = Model({resourceName:'Message'})
//model.init()
//model.fetch()
//model.save({name:'xxx',content:'xxx'})
//Model办事，我放心
//Model就是个模板