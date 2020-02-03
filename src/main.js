import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import ImageUploader from "vue-image-upload-resize";


Vue.config.productionTip = false

Vue.use( CKEditor )
Vue.use(ImageUploader)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
