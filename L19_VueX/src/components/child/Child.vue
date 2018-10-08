<template>
	<div>
		儿子:{{ getCount }}
		{{ title }}
		<button @click="sendMsg">按钮</button>
		<button @click="min">减减</button>
	</div>
</template>

<script>
	
export default{
	name:"son",
	data(){
		return{
			info:"嗯嗯嗯"
		}
	},
	props:{
		title:{
			type:String,
			default:""
		}
	},
	methods:{
		sendMsg(){
			this.$emit("info",this.info)
		},
		min(){
			// this.$store.commit("decrease");
			this.$store.dispatch("decrease");
		}
	},
	computed:{
		getCount(){
			// return this.$store.state.count;
			return this.$store.getters.getState;
		}
	}
}

</script>

<style>
	
	

</style>