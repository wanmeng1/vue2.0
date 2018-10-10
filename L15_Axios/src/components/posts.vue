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
		this.$axios.post("/sxtstu/blueberrypai/login.php",{
      user_id:"iwen@qq.com",
      password:"iwen123",
      verification_code: "crfvw"
    })
		.then(res => {
			console.log(res.data)
		})
		.catch(error => {
			console.log(error);
		})
		// var url = this.HOST + "/movie/top250";
		// this.$axios.get(url,{
		// 	params:{
		// 		count:10,
		// 		start:0
		// 	}
		// })
		// .then(res => {
		// 	console.log(res.data)
		// })
		// .catch(error => {
		// 	console.log(error);
		// })
	}
}	

</script>
<style>
	
</style>
