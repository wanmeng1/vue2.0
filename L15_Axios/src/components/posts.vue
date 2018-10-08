<template>
	<div>
		post
	</div>
</template>
<script>
	
export default{
	name:"posts",
	data(){
		return{

		}
	},
	created(){
		// var url = this.HOST + "/login";
		// console.log(url);
		// this.$axios.post(url,	{
		// 	username:"iwen",
		// 	password:"helloiwen"
		// })
		// .then(res => {
		// 	console.log(res.data)
		// })
		// .catch(error => {
		// 	console.log(error);
		// })
		var url = this.HOST + "/movie/top250";
		this.$axios.get(url,{
			params:{
				count:10,
				start:0
			}
		})
		.then(res => {
			console.log(res.data)
		})
		.catch(error => {
			console.log(error);
		})
	}
}	

</script>
<style>
	
</style>