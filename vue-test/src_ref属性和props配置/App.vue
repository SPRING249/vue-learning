<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上访的DOM元素</button>
    <MySchool ref="sch"></MySchool>
    <!--:age==v-bind : 18为number 类型-->
    <my-student name="潘博文" sex="女" :age="18"></my-student>

  </div>
</template>

<script>
import MySchool from './components/School.vue'
import MyStudent from './components/Student.vue'

export default {
  name: "App",
  components: {
    MySchool, MyStudent
  },
  data() {
    return {
      msg: '欢迎学习Vue'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title) //获取真实DOM元素
      console.log(this.$refs.btn)   //获取真实DOM元素
      console.log(this.$refs.sch) //School组件的实例
    },

  }
}
</script>
