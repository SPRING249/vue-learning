<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--把foods传给了slot的使用者-->
    <slot :foods="foods"></slot>

  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
  data() {
    return {
      foods: ['烧烤', '火锅', '烤肉', '超级玛丽']
    }
  }
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