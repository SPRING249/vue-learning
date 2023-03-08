<template>
  <div class="parent">
    <h1>{{ msg }}</h1>
    <p>爸爸的资产：{{ money }}</p>
    <p>儿子的名字：{{ sonName }}</p>
    <h1>使用$event参数</h1>
    <my-son :name="sonName" @updateDemo="money-=$event" @update:name="sonName=$event"></my-son>
    <h1>使用自定义方法接收参数</h1>
    <my-son :name="sonName" v-on:updateDemo="spendMoney" @update:name="sonName=$event"></my-son>
    <my-son :name="sonName" @updateDemo="spendMoney" @update:name="sonName=$event"></my-son>
    <h1>使用sync双向绑定</h1>
    <my-son :name.sync="sonName" @updateDemo="spendMoney"></my-son>
  </div>
</template>

<script>
import MySon from "@/components/MySon.vue";

export default {
  name: "MyFather",
  components: {
    MySon
  },
  data() {
    return {
      msg: '父组件',
      money: 100,
      sonName: 'JoJo'
    }
  },
  methods: {
    spendMoney(money) {
      this.money -= money
    }
  }
}
</script>

<style scoped>

</style>