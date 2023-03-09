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

import MySchool from "../src/components/MySchool.vue";
import MyStudent from "../src/components/MyStudent.vue";

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

}

</script>
