<template>
  <div class="hello">
    {{ hello }}
    {{ 1+1 }}
    {{ "哈哈" }}
    {{ 0<10 ? '对的' : '错的' }}
    {{ '注意：只能存在单行语句' }}
    <p>{{ flag }}</p>
    <p v-html="hello"></p>
    <p v-text="hello"></p>

    <span v-bind:class="ha">哈哈哈</span>
    <span v-bind:title="ts">提示</span>

    {{ message.split('').reverse().join('') }}

    <div>
        
      <template v-if="show">
        <span>我是if为true看到的</span>
        <a href="#">哈哈</a>
        <span>iwen</span>
      </template>
      <template v-else>
        <span>我是if为false看到的</span>
        <span>哈哈</span>
      </template>

    </div>

    <div v-show="show">我是v-show的效果</div>

    <div class="list">
      <ul>
        <li v-for="(name,index) in names" v-bind:key="index">{{ name }}-{{ index }}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in user" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
    </div>

    <button v-on:click="num+=1">按钮</button>
    <p>{{ num }}</p>
    <button v-on:click="handlerClick">按钮1</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num:1,
      hello:"<p>Hello,VUE</p>",
      flag:"我是flag",
      ha:"ha1",
      ts:"我是提示",
      message:"hello",
      show:false,
      names:["iwen","ime","ice"],
      user:[
        {
          id:0,
          name:"iwen",
          age:20
        },
        {
          id:1,
          name:"ime",
          age:200
        },
        {
          id:2,
          name:"ice",
          age:2000
        }
      ]
    }
  },
  methods:{
    handlerClick(){
      console.log(this);// this指向当前组件
      // this来索引当前data中的数据
      this.show = !this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.ha{
  color:red;
}

</style>
