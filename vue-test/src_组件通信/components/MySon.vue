<template>
  <div class="parent">
    <h1>{{ msg }}</h1>
    <p>爸爸给我起的名子为：{{ name }}</p>
    <button @click="getMoney(10)">我花我爸十块钱</button>
    <button @click="changeName">我要改名</button>
  </div>
</template>

<script>
export default {
  name: "MySon",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      msg: '子组件'
    }
  },
  methods: {
    getMoney(money) {
      this.$emit('updateDemo', money)
    },
    // changeName() {
    //   this.$emit('update:name', "柯南")
    // }
    changeName() {
      this.$parent.sonName = '柯南'
    }
  }
}
</script>

<style scoped>

</style>