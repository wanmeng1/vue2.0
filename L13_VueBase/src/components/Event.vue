<template>
	<!-- 在template中，只能存在一个跟组件 -->
	<div class="event">
		<ul>
			<li v-on:click.once="getItemInfo(index,$event)" v-for="(name,index) in names">{{ name }}</li>
		</ul>
		<input type="text" @keyup.enter="getKeyInfo">
		<button v-on:click="pushArr">按钮</button>
		<button v-on:click="getOdd">我要奇数</button>
		<ul>
			<li v-for="num in wantNums">{{ num }}</li>
		</ul>
		<div>
			<p>{{  msgRe }}</p>
			<p>{{  msgRe  }}</p>
			<p>{{ methodsMsgRe() }}</p>
		</div>
	</div>
</template>
<script>
	
export default{
	// data中的数据改变，会引起视图的改变
	data(){
		return{
			names:["iwen","ime","ice"],
			nums:[1,2,3,4,5,6,6,7],
			wantNums:[],
			message:"hello"
		}
	},
	methods:{
		// 事件中的默认参数event
		getItemInfo(data,event){
			console.log(this.names[data]);
			console.log(event);
		},
		getKeyInfo(event){
			console.log(event);
		},
		pushArr(){
			// this.names.push("frank");
			this.names.concat(["frank"]);
		},
		getOdd(){
			this.nums.filter(num => {
				if(num % 2 !== 0){
					this.wantNums.push(num);
				}
			})
		},
		methodsMsgRe(){
			return this.message.split('').reverse().join('');
		}
	},
	computed:{
		msgRe(){
			return this.message.split('').reverse().join('');
		}
	}
}

</script>
<style>
	
</style>