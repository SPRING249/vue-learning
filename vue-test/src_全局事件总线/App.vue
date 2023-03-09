<template>
  <div>
    <h1>{{ msg }}</h1>
    <my-school></my-school>
    <my-student></my-student>
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
