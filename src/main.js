// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastClick from 'fastClick'
import router from './router'
import store from './store'
import VueBus from 'vue-bus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueBus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueBus,
  components: { App },
  template: '<App/>'
})
