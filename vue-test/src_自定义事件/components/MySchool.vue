<template>
  <div class="school">
    <h1>学校信息</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>

</template>

<script>
export default {
  name: "MySchool",
  props: ['getSchoolName'],
  data() {
    return {
      name: '尚硅谷',
      address: '南京'
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>