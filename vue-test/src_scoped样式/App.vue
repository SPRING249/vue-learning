<template>
  <div>
    <h1>{{ msg }}</h1>
    <my-school></my-school>
    <hr>
    <my-student></my-student>

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


}
</script>
