<template>
	<div>
		<div>推荐</div>
		<FooterNav />
	</div>
</template>

<script>

import FooterNav from "../components/FooterNav"
	
export default{
	name:"layout",
	data(){
		return{

		}
	},
	components:{
		FooterNav
	},
	created(){
		this.$http.get("http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php")
		.then(res => {
			console.log(res.body);
		})
		.catch(error => {
			console.log(error);
		})

	}
}	

</script>
<style scoped lang="less">
	
</style>