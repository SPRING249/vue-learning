<template>
  <div id='Demo'>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin} from '@/mixin'

export default {
  name: "MySchool",
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  },
  mixins: [mixin]
  // methods: {
  //   showName() {
  //     alert(this.name)
  //   }
  // },
}
</script>
