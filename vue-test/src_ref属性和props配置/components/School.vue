<template>
  <div id='Demo'>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <!--<button @click="showName">点我提示学校名</button>-->
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  },
}
</script>

<style scoped>
#Demo {
  background: orange;
}
</style>