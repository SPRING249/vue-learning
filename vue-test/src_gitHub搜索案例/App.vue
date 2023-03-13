<template>
  <!--<div id="root">-->
  <!--  <button @click="getStudents">获取学生信息</button>-->
  <!--  <br/>-->
  <!--  <button @click="getCars">获取汽车信息</button>-->
  <!--</div>-->
  <div class="container">
    <search></search>
    <list></list>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import List from "@/components/List.vue";

export default {
  name: "App",
  components: {
    Search, List
  }
  // methods: {
  //   getStudents() {
  //     axios.get('http://localhost:8081/jojo/students').then(
  //         response => {
  //           console.log('请求成功了', response.data)
  //         },
  //         error => {
  //           console.log('请求失败了', error.message)
  //         }
  //     )
  //   },
  //   getCars() {
  //     axios.get('http://localhost:8081/atguigu/cars').then(
  //         response => {
  //           console.log('请求成功了', response.data)
  //         },
  //         error => {
  //           console.log('请求失败了', error.message)
  //         }
  //     )
  //   }
  // }


}
</script>
<style>

</style>