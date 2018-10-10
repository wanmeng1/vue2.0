<template>
	<div class="box">
		<p>哈哈</p>
		<SXTNC />
	</div>
</template>
<script>
	
import SXTNC from "sxt_nc"	
export default{
	name:"lazy",
	data(){
		return{
			
		}
	},
	components:{
		SXTNC
	}
}	

</script>
<style scoped lang="less">


// 200px*300px
.box{
	width: 200 / 50rem; //
	height: 300 / 50rem;
	background: red;
	font-size: 16 / 50rem;
}

</style>
