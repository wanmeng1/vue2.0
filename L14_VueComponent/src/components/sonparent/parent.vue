<template>
	<div>
		父组件
		<input type="text" v-model="num">
		<Child @sendmsg="getMsg" :num="getNum"/>
		{{ info }}
	</div>
</template>
<script>

import Child from "./child"
	
export default{
	name:"parent",
	data(){
		return{
			info:"",
			num:5
		}
	},
	computed:{
		getNum(){
			return this.num - 0;
		}
	},
	components:{
		Child
	},
	methods:{
		getMsg(data){
			this.info = data;
		}
	}
}	

</script>
<style>
	
</style>