<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--定义一个插槽，等着组件的使用者进行填充-->
    <slot>我是一些默认值</slot>
    <ul>
      <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['listData', 'title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orangered;
}

</style>