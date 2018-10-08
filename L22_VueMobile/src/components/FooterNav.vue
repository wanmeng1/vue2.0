<template>
	<div class="footer">
		<ul>
			<li><router-link to="/tuijian">
				<i class="iconfont icon-homepage_fill"></i>
				推荐
			</router-link></li>
			<li><router-link to="/remen">
				<i class="iconfont icon-live_fill"></i>
				热门
			</router-link></li>
			<li><router-link to="/shiye">
				<i class="iconfont icon-manage_fill"></i>
			视野</router-link></li>
			<li><router-link to="/wode">
				<i class="iconfont icon-people_fill"></i>
			我的</router-link></li>
		</ul>
	</div>
</template>

<script>

import "../assets/font/iconfont.css"	

export default{
	name:"footernav",
	data(){
		return{

		}
	}
}	

</script>
<style scoped lang="less">

.footer{
	width: 100%;
	height: 50 / 50rem;
	position:fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	ul{
		display: flex;
		li{
			flex:1;
			text-align: center;
			font-size: 14 / 50rem;
			i{
				margin-top: 5.5 / 50rem;
				display: block;
				font-size: 25 / 50rem;
			}
		}
	}
}

.active{
	color:green;
}


	
</style>