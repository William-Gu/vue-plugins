import './toast.css';

var Toast = {}
Toast.install = function (Vue, options) {
  var showToast = false 
  let opt = {
    duration: '2500' // 持续时间
  }
  for (let property in options) {
    opt[property] = options[property] // 使用 options 的配置
  }
  function initialToast () {
    var toastMask = document.querySelector('.vue-toastMask')
    if (toastMask) { toastMask.remove() }
    var toastDom = document.querySelector('.vue-toast')
    if (toastDom) { toastDom.remove() }
    showToast = false
  }
  Vue.prototype.$toast = (tips, type) => {
    initialToast()
    var ToastTpl = Vue.extend({
      data: function () {
        return {
          show: !showToast
        }
      },
      template: '<div v-show="show" class="vue-toastMask"><div class="vue-toast"><div class="vue-toastLoading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>'
    })
    let tpl = new ToastTpl().$mount().$el
    document.body.appendChild(tpl)
    showToast = true
    setTimeout(function () {
      initialToast()
    }, opt.duration)
  }
  Vue.prototype.$toast.hide = ()=>{
    initialToast()
  }
}
export default Toast