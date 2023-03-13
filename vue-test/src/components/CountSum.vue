<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "CountSum",
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  methods: {
    //递增,使用commit触发Mutation操作
    increment() {
      this.$store.commit('ADD', this.n)
    },
    //递减
    decrement() {
      this.$store.commit('SUBTRACT', this.n)
    },
    //增量奇数,直接使用dispatch触发action函数
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    //增量等待
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    },
  },
}
</script>

<style scoped>

</style>