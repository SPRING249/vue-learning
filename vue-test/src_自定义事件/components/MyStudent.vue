<template>
  <div class="student">
    <h1>学生信息</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <br>
    <button @click="unbind">解绑atguigu事件</button>
    <br>
    <button @click="death">销毁Student所有实例</button>

  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: '潘博文',
      sex: '女'
    }
  },
  methods: {
    //触发Student组件实例上的atguigu事件
    sendStudentName() {
      this.$emit('atguigu', this.name)
      this.$emit('demo')
    },
    unbind() {
      //解绑多个事件
      this.$off(['atguigu', 'demo'])

    },
    death() {
      //销毁了当前Student组件的所有实例，销毁后所有实例的自定义事件全都不奏效
      this.$destroy()
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