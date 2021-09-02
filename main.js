import { createApp } from 'vue'

var app = new Vue({
    el: '#app',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

