<template>
  <div class="student">
    <h1>学生信息</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">发送姓名给School组件</button>
  </div>
</template>

<script>
//发布消息
import pubsub from 'pubsub-js'

export default {
  name: "MyStudent",
  data() {
    return {
      name: '潘博文',
      sex: '女'
    }
  },
  methods: {
    sendStudentName() {
      pubsub.publish('demo', 666)
    }
  }

}
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 20px;
}
</style>