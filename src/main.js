import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VideoPlayer from 'vue-video-player'
import Icon from 'vue-awesome/components/Icon'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-awesome/icons'
import 'swiper/dist/css/swiper.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-contrib-hls'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.component('v-icon', Icon)
Vue.use(VueAwesomeSwiper)
Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
