window.Controller = function (options)
{
  var init = options.init
  let object = {
    view: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.model.init()
      init.call(this, view, model)
      this.bindEvents.call(this) //这个是先执行init然后执行bindEvents  要是顺序有问题的话也会报错的
    },
  }
  for (let key in options) {
    if (key !== 'init') {
      object[key] = options[key]
    }
  }
  return object
}