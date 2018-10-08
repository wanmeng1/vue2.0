<template>
	<div>
		<div>
			<router-link to="/remenhot">热门</router-link>
		</div>
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
	}
}	

</script>
<style scoped lang="less">
	
</style>