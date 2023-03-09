<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--通过父组件给子组件传递函数类型的props:实现子给父传递数据-->
    <my-school :getSchoolName="getSchoolName"></my-school>

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
    <!--<my-student @atguigu="demo"></my-student>-->
    <!--自定义事件：ref,更灵活-->
    <my-student ref="student"></my-student>
  </div>
</template>

<script>
import MySchool from "../src_TodoList案例/components/MySchool.vue";
import MyStudent from "../src_TodoList案例/components/MyStudent.vue";

export default {
  name: "App",
  components: {
    MyStudent,
    MySchool,

  },
  data() {
    return {
      msg: '你好呀'
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App受到了学校名', name)
    },
    //里面的组件实例对象就是App的组件实例对象
    // getStudentName(name, ...params) {
    //   console.log('App受到了学生名', params.name)
    // },
    demo() {
      console.log('demo被调用了')
    }
  },
  mounted() {
    // this.$refs.student.$on('atguigu', this.getStudentName)
    this.$refs.student.$on('atguigu', (name, ...params) => {
      console.log('App收到了学生名：', name, params)
      console.log(this)
      this.studentName = name
    })

    // 只触发一次
    // this.$ref.student.$once('atguigu', this.getStudentName)
  }
}

</script>
