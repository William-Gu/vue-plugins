<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="showToast">Toast</button>
    <button @click="hideToast">Toast Close</button>
    <button @click="showDialog">dialog</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
       msg: 'William plugin in Vue.'
    }
  },
  methods:{
    showToast(){
      this.$toast();
    },
    hideToast(){
      this.$toast.hide();
    },
    showDialog(){
      var OBJECT = {
        title: '提示',isShowCancelIcon:true,
        confirmStyle:{color:'#49D8F5'} 
      }
      this.$dialog(OBJECT)
    }
  }
}
</script>
