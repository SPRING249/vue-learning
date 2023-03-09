<template>
  <ul class="todo-main">
    <!--2.MyList收到todos重新解析模板，出现了四个虚拟DOM
        3.虚拟DOM比较，:key="todo.id",页面初始TODO都不是重新生成的，而是之前的
    -->
    <MyItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
    />
  </ul>
</template>

<script>
import MyItem from "@/components/MyItem.vue";

export default {
  name: "MyList",
  components: {
    MyItem
  },
  props: ['todos']
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>