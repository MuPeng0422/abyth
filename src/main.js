import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Icon from 'vue-awesome/components/Icon'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VideoPlayer from 'vue-video-player'
import VueAMap from 'vue-amap'
import VCharts from 'v-charts'

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
Vue.use(VueAMap)
Vue.use(VCharts)

VueAMap.initAMapApiLoader({
  key: '458563dfd98653260b561d7dd3d8879f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
