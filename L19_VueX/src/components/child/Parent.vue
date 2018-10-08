<template>
	<div>
		父亲：
		{{ info }}
		<Child :title="msg" @info="handlerMsg" />
	</div>
</template>

<script>
	
import Child from "./Child"
	
export default{
	name:"parent",
	data(){
		return{
			msg:"儿子儿子，我是你爸爸",
			info:""
		}
	},
	components:{
		Child
	},
	methods:{
		handlerMsg(data){
			this.info = data;
		}
	}
}

</script>

<style>
	


</style>