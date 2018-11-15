// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



// import TopNav from '@/components/topNav/topNav.js'
// Vue.use(TopNav)
// import entityList from '@/components/entityList/entityList.js'
// Vue.use(entityList)

// // 提示框插件
import Toast from '@/plugin/toast/toast'
Vue.use(Toast, {defaultType: 'center', duration: 2000})
import Dialog from '@/plugin/dialog/dialog'
Vue.use(Dialog)

Vue.config.productionTip = false
// Vue.$toast.$loading()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
