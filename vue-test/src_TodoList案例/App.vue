<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyList from "@/components/MyList.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyFooter, MyList, MyHeader
  },
  data() {
    return {
      todos: [
        {id: '001', title: '学习', done: false},
        {id: '002', title: '睡觉', done: false},
        {id: '003', title: '看电视', done: false}
      ]
    }
  },
  methods: {
    //APP父添加一个todo，传给子MyHeader
    addTodo(todoObj) {
      //1.操作data中的数据，数据变化vue重新解析模板，四个TODO交给myList
      this.todos.unshift(todoObj)
    },
    //勾选或取消勾选一个TODO，先给MyList
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    //全选or取消勾选
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    //删除已完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  }
}
</script>
<style scoped>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>