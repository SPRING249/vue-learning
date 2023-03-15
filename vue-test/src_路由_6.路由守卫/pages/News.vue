<template>
  <ul>
    <li :style="opacity">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>

</template>

<script>
export default {
  name: "News",
  data: function () {
    return {
      opacity: 1
    };
  },
  // beforeDestroy() {
  //   console.log('News组件即将诶销毁了')
  //   clearInterval(this.timer)
  // },
  activated() {
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)

  },
  deactivated() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  },
  //Vue完成模板的解析并把真实的DOM元素放入页面（挂载完毕）调用mounted
  // mounted() {
  //   // console.log('mounted', this)
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01
  //     if (this.opacity <= 0) this.opacity = 1
  //   }, 16)
  //
  // }
}
</script>

<style scoped>

</style>