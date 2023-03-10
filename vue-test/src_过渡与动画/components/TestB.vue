<template>
  <div>
    <button @click="isShow=!isShow">显示或隐藏</button>
    <transition-group>
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">欢迎学习VUe</h1>
    </transition-group>

  </div>
</template>

<script>
export default {
  name: "TestB",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
  transition: 0.5s;
}

/*进入的起点、离开的终点*/
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active, .hello-leave-active {
  transition: 0.5s linear;
}

/*进入的终点、离开的终点*/
.hello-enter-to, hello-leave {
  transform: translateX(0);
}

</style>