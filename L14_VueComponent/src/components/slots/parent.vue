<template>
	<div class="parent">
		父组件
		<Child>
			<div slot="s1">
				<p class="ptest">我是插槽1</p>
				<p class="ptest">我是插槽11</p>
			</div>
			<template slot="s2" slot-scope="key" >
				<p class="ptest">
					{{ key.text }}
				</p>
			</template>
		</Child>
	</div>
</template>
<script>
	
import Child from "./child"

export default{
	name:"parent",
	data(){
		return{
		}
	},
	components:{
		Child
	}
}	

</script>
<style scoped>
	

	
</style>