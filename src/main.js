import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuecustomElement from 'vue-custom-element'
import UploadButton from 'vuetify-upload-button';

require('./assets/css/style.css')

Vue.use(vuecustomElement)
Vue.customElement('upload-btn', UploadButton)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
