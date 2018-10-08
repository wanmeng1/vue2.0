<template>
  <div class="hello">
    <swiper :options="swiperOption">
    <swiper-slide>
      <img src="http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
       <img src="http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
       <img src="http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner3.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 400px;
  height: 200px;
}

.swiper-pagination-bullet-active{
  background: red;
}

</style>
