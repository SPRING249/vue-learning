<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!--router-link 的元素只能为 <a>。-->
          <router-link replace class="list-group-item"
                       active-class="active" to="/home/news">News
          </router-link>
        </li>
        <li>
          <router-link replace class="list-group-item"
                       active-class="active" to="/home/message">Message
          </router-link>
        </li>
      </ul>
      <!--缓存多个组件路由-->
      <!--<keep-alive :include="['News','Message']">-->
      <!--缓存一个组件路由-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  // beforeDestroy() {
  //   console.log('Home组件即将被销毁')
  // },
  mounted() {
    console.log('Home组件挂载完毕了', this)
    window.homeRoute = this.$route
    window.homeRoutr = this.$router
  }


}
</script>

<style scoped>

</style>