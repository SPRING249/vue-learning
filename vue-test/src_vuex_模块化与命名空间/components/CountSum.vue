<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3>PersonList组件的总人数为:{{ personList.length }}</h3>
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
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),
    ...mapGetters('countAbout', ['bigSum']),

  },
  methods: {

    //需要传入参数，借用生成对应的方法，方法中会调用commit去联系mutations
    ...mapMutations('countAbout', {increment: 'ADD', decrement: 'SUBTRACT',}),
    //需要传入参数，借用生成对应的方法，方法中会调用dispatch去联系actions
    ...mapActions('countAbout', {incrementOdd: 'addOdd', incrementWait: 'addWait'})

  },
}
</script>

<style scoped>

</style>