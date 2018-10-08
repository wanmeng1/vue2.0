<template>
	<div class="child">
		子组件
		<slot name="s1"></slot>
		<hr />
		<slot name="s2" text="我是数据传递"></slot>
	</div>
</template>
<script>
	
export default{
	name:"child",
	data(){
		return{
		}
	}
}	

</script>
<style scoped>

.ptest{
	color: red;
}

</style>