<template>
  <div>
    <button @click="isShow=!isShow">显示或隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>

    <transition name="hello2" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestA",
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
}

/*进入激活*/
.hello-enter-active {
  animation: atguigu 1s;
}

.hello-leave-active {
  animation: atguigu 1s reverse;
}

.hello2-enter-active {
  animation: atguigu 1s;
}

.hello2-leave-active {
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from {
    transform: translate(-100px);
  }
}
</style>