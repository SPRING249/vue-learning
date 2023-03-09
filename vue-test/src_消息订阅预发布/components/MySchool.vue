<template>
  <div class="school">
    <h1>学校信息</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>

</template>

<script>
//收数据要订阅消息
import pubsub from 'pubsub-js'

export default {
  name: "MySchool",
  data() {
    return {
      name: '尚硅谷',
      address: '南京',
      data: ''
    }
  },
  mounted() {
    // this.$bus.$on('demo', (data) => {
    //   console.log('我是School组件，收到了数据', data)
    // })
    this.pubId = pubsub.subscribe('demo', (msgName, data) => {
      console.log('有人发布了消息，消息的回调执行了', msgName, data)
    })
  },
  beforeDestroy() {
    // this.$bus.$off('demo')
    pubsub.unsubscribe(this.pubId)
  }


}
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>