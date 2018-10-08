<template>
	<div>
		<ul>
			<li>
				<router-link :to="urlData.helloworld">helloworld</router-link>
				<!-- <a href="#/">world</a> -->
				<!-- <router-link :to="{path:'/'}">helloworld</router-link> -->
			</li>
			<li>
				<router-link :to="urlData.helloiwen">helloiwen</router-link>
				<!-- <a href="#/iwen">iwen</a> -->
				<!-- <router-link :to="{path:urlData.helloiwen}">helloiwen</router-link> -->
			</li>
		</ul>
	</div>
</template>
<script>
	
export default{
	name:"navlist",
	data(){
		return{
			urlData:{
				helloworld:"/",
				helloiwen:"/iwen"
			}
		}
	}
}	

</script>
<style scoped>
	
ul{
	list-style: none;
	text-align: center;
}

ul li{
	display: inline-block;
	margin:0 20px;
}	

</style>