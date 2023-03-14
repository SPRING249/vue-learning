<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "CountSum",
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    //拓展运算符
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    // //递增,使用commit触发Mutation操作
    // increment() {
    //   this.$store.commit('ADD', this.n)
    // },
    // //递减
    // decrement() {
    //   this.$store.commit('SUBTRACT', this.n)
    // },
    //需要传入参数，借用生成对应的方法，方法中会调用commit去联系mutations
    ...mapMutations({increment: 'ADD', decrement: 'SUBTRACT',}),
    //数组写法
    // ...mapMutations(['ADD', 'SUBTRACT']),


    /*******************************************************/
    //增量奇数,直接使用dispatch触发action函数
    /*
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    //增量等待
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    },
    */
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'})

  },
}
</script>

<style scoped>

</style>