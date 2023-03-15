<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  // beforeDestroy() {
  //   console.log('About组件即将被销毁')
  // },
  mounted() {
    console.log('About组件挂载完毕了', this)
    window.aboutRoute = this.$route
    window.aboutRoutr = this.$router
  },
  //通过路由规则,进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('App-----beforeRouteEnter', to, from)
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'atguigu') {
        next()
      } else {
        alert('学校名不对，无权限查看！')
      }
    } else {
      next()
    }
  },
  //通过路由规则,离开该组件时被调用.  后置守卫进入组件的时候已经调用
  beforeRouteLeave(to, from, next) {
    console.log('App-----beforeRouteLeave', to, from)
  },

}
</script>

<style scoped>

</style>