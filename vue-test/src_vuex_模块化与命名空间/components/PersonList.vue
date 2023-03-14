<template>
  <div>
    <h1>人员列表</h1>
    <h3>CountSum组件的求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是:{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "PersonList",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    //计算属性，获得state中的数据
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName'];
    },
    // ...mapGetters('personAbout',['firstPersonName'])
  },
  methods: {
    //方法通过commit提交给mutations
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_Person', personObj)
      this.name = ''
    },
    //方法通过dispatch提交给actions
    addWang() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ''
    },
  }
}
</script>

<style scoped>

</style>