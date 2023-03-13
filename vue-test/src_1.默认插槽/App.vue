<template>
  <div class="container">
    <category title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </category>
    <category title="游戏" :listData="games">

    </category>
    <category title="电影" :listData="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
.container {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>