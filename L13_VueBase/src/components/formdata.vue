<template>
	<div>
		<input type="text" v-model.number="msg">
		<p>{{ message }}</p>
	</div>
</template>
<script>
	
export default{
	name:"formdata",
	data(){
		return{
			msg:"hello",
			message:"hello"
		}
	},
	watch:{
		msg:function(data){
			this.message = data;
			// if(data == "哈哈"){
			// 	return "哈哈"
			// }
			// setTimeout(() => {
			// 	$.ajax({
			// 		url:"",
			// 		data:{
			// 			key:data
			// 		},
			// 		success:function(res){
			// 			this.message = res;
			// 		}
			// 	})
			// },100)

		}
	}
}	

</script>
<style>
	
</style>