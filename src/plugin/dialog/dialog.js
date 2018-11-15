import './dialog.css'

var Dialog = {}
Dialog.install = function (Vue, options) {
  function initialDialog () {
    var dialogMask = document.querySelector('.vue-dialogMask')
    if (dialogMask) { dialogMask.remove() }
    var dialog = document.querySelector('.vue-dialog')
    if (dialog) { dialog.remove() }
  }
  Vue.prototype.$dialog = (OBJECT, type) => {
    if (type === 'close') {
      initialDialog()
    } else {
      initialDialog()
      if(OBJECT && !OBJECT.success){
        OBJECT.success = initialDialog
      }

      let DialogTpl = Vue.extend({
        data(){
          return {
            title : OBJECT.title || '提示',
            isShowTitle : OBJECT.title ? true : false,
            content : OBJECT.content || '请输入内容',
            cancelText : OBJECT.cancelText || '取消',
            isShowCancel : OBJECT.cancelText ? true : false,
            isShowCancelIcon : OBJECT.isShowCancelIcon ? true : false,
            borderColor : OBJECT.borderColor ? {borderColor : OBJECT.borderColor} : {borderColor : 'transparent'},
            confirmText: OBJECT.confirmText || '确认',
            confirmStyle: OBJECT.confirmStyle,
            success: OBJECT.success || ''
          }
        },
        template: `<div class="vue-dialogMask">
                    <div class="vue-dialog" @touchstart.stop="onStopPropagation">
                      <i v-if="isShowCancelIcon" class="vue-dialogClose" @click="initialDialog()"></i>
                      <h3 v-if="isShowTitle">{{title}}</h3>
                      <p class="vue-dialog-content" v-html="content"></p>
                      <div class="vue-dialog-btn">
                        <button @click="initialDialog()" :style="[borderColor]" v-if="isShowCancel">{{cancelText}}</button>
                        <button @click="successFn()" :style="[borderColor,confirmStyle]">{{confirmText}}</button>
                      </div>
                    </div>
                  </div>`,
        methods: {
          initialDialog () {
            initialDialog()
          },
          onStopPropagation(){
          },
          successFn(){
            this.success()
            initialDialog()
          }
        }
      })
      let tpl = new DialogTpl().$mount().$el

      document.body.appendChild(tpl)
    }
  }
  ['close'].forEach(type => {
    Vue.prototype.$dialog[type] = (OBJECT) => {
      return Vue.prototype.$dialog(OBJECT, type)
    }
  })
}
export default Dialog
// module.exports = Dialog