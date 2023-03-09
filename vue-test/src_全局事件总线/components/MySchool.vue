<template>
  <div class="school">
    <h1>学校信息</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>

</template>

<script>

export default {
  name: "MySchool",
  data() {
    return {
      name: '尚硅谷',
      address: '南京',
      data: ''
    }
  },
  mounted() {
    this.$bus.$on('demo', (data) => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('demo')
  }


}
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>