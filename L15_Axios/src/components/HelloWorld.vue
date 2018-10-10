<template>
  <div class="hello">
    <div>
      <ul>
        <li v-for="news in newsData">
           <p>{{ news.title }}</p>
           <img :src="news.thumbnail_pic_s" alt="">
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      newsData:[]
    }
  },
  // created(){
  //   this.$axios("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30")
  //     .then(res=>{
  //       console.log(res.data)
  //     }).catch(error=>{
  //       console.log(error)
  //   })
  // }
  created(){
    this.$axios("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
      params:{
        type:"junshi",
        count:30
      }
    })
    .then(res => {
      this.newsData = res.data.result.data;
      // console.log(res);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>

</style>
