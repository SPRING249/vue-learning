<template>
  <li>
    <label>
      <!--勾选TODO：:checked="todo.done"---初始化显示
      交互：绑定事件@click
      -->
      <input type="checkbox"
             :checked="todo.done"
             @click="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit"
             type="text"
             :value="todo.title"
             @blur="handleBlur(todo,$emit)">
    </label>
    <button class="btn btn-danger"
            @click="handleDelete(todo.id,todo.title)">
      删除
    </button>
    <button class="btn btn-edit" @click="handleEdit(todo)">
      编辑
    </button>
  </li>
</template>

<script scoped>
import pubsub from "pubsub-js";

export default {
  name: "MyItem",
  //声明接收TODO对象，收到以后在vc上
  props: ['todo'],
  methods: {
    handleCheck(id) {
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },

    handleDelete(id, title) {
      if (confirm("确定删除任务：" + title + "吗？")) {
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }

    },
    handleEdit(todo) {
      // todo.isEdit = true
      if (todo.hasOwnProperty.call('isEdit')) {
        todo.isEdit = true
      } else {
        console.log('@@')
        this.$set(todo, 'isEdit', true)
      }

      console.log(todo)
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false
      console.log('updateTodo', todo.id, e.target.value)
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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