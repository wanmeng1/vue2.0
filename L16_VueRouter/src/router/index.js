import Vue from 'vue'
import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld"
import HelloIwen from "../components/HelloIwen"


Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: "/",
		component: HelloWorld
	}, {
		path: "/iwen",
		component: HelloIwen
	}]
})