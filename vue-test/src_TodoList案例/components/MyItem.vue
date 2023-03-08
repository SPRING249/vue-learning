<template>
  <li>
    <label>
      <!--勾选TODO：:checked="todo.done"---初始化显示
      交互：绑定事件@click
      -->
      <input type="checkbox"
             :checked="todo.done"
             @click="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger"
            @click="handleDelete(todo.id,todo.title)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  //声明接收TODO对象，收到以后在vc上
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    handleCheck(id) {
      this.checkTodo(id)
    },
    handleDelete(id, title) {
      if (confirm("确定删除任务：" + title + "吗？")) {
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/*悬停效果*/
li:hover {
  background-color: #eee;
}

li:hover button {
  display: block;
}
</style>