// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 定义指令
// Vue.directive('focus', {
// 	// 当被绑定的元素插入到 DOM 中时……
// 	inserted: function(el) {
// 		// 聚焦元素
// 		el.focus()
// 	}
// })


/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})