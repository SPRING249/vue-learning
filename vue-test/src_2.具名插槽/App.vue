<template>
  <div class="container">
    <category title="美食" :listData="foods">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="www.baidu.com">更多美食</a>
    </category>
    <category title="游戏" :listData="games">
      <div class="foot" slot="footer">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.baidu.com">网络游戏</a>
      </div>
    </category>
    <category title="电影" :listData="films">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>

    </category>
  </div>

</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: "App",
  components: {
    Category
  },
  data() {
    return {
      games: ['植物大战僵尸', '红色警戒', '空洞骑士', '王国'],
      foods: ['烧烤', '火锅', '烤肉', '超级玛丽'],
      films: ['《教辅》', '《黑暗荣耀》', '《楚门的世界》', '《王国》']
    }
  }

}
</script>
<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>