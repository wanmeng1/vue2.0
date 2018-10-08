// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from "axios"
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
	// Vue.use(VueLazyload, {
	//   preLoad: 1.3,
	//   error: 'dist/error.png',
	//   loading: 'dist/loading.gif',
	//   attempt: 1
	// })
import 'swiper/dist/css/swiper.css'
import {
	Button,
	Carousel,
	CarouselItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})