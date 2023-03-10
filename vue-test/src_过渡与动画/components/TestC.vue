<template>
  <div>
    <button @click="isShow=!isShow">显示或隐藏</button>
    <transition-group appear
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__backInUp"
                      leave-active-class="animate__backOutUp">
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">欢迎学习VUe</h1>
    </transition-group>

  </div>
</template>

<script>
import "animate.css"

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
}

</style>