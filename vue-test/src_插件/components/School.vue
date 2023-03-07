<template>
  <div id='Demo'>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试方法</button>
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
    test() {
      alert('test')
    }
  }
}
</script>
