<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="updateAge">常识修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: '学生信息',
      myAge: this.age
    }
  },
  //接收数据
  // 简单接收,先接受，优先级更高
  props: ['name', 'sex', 'age'],
  methods: {
    updateAge() {
      this.myAge = 99
    }

  },

  // 限制类型
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }
  // //限制类型、
  // props: {
  //   name: {
  //     type: String,
  //     required: true //name是必要的
  //   },
  //   age: {
  //     type: Number,
  //     default: 99  //required和default不同时出现
  //   },
  //   sex: {
  //     type: String,
  //     required: true
  //   }
  // }
}
</script>
