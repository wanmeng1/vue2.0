import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import ReMen from "@/pages/remen"
import ShiYe from "@/pages/shiye"
import TuiJian from "@/pages/tuijian"
import WoDe from "@/pages/wode"
import ReMenHot from "@/pages/details/renmen_hot"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:"/tuijian",
      children:[
		{
			path:"remen",
			component:ReMen
		},
		{
			path:"shiye",
			component:ShiYe
		},
		{
			path:"tuijian",
			component:TuiJian
		},
		{
			path:"wode",
			component:WoDe
		},
		{
			path:"remenhot",
			component:ReMenHot
		}
      ]	
    }
  ]
})
