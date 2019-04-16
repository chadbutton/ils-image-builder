import Vue from 'vue'
import './plugins/vuetify'
import Builder from './Builder.vue'
import vuecustomElement from 'vue-custom-element'
import UploadButton from 'vuetify-upload-button'
import VueRouter from 'vue-router'

require('./assets/css/style.css')

Vue.use(vuecustomElement)
Vue.customElement('upload-btn', UploadButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(Builder),
}).$mount('#app')
