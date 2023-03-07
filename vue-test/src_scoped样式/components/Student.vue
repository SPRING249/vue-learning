<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>

export default {
  name: "MyStudent",
  data() {
    return {
      name: '学生信息',
      sex: '男'
    }
  },

}
</script>
<style lang="css">
.demo {
  background-color: pink;
}
</style>
<!--<style scoped>-->
<!--.demo {-->
<!--  background-color: pink;-->
<!--}-->
<!--</style>-->