<template>
  <div class="todo-header">
    <input type="text"
           placeholder="请输入你的任务名称，按回车键确认"
           @keydown.enter="add"
           v-model="title"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyHeader",
  data() {
    return {
      title: ''
    }
  },
  props: ['addTodo'],
  methods: {
    add() {
      // 删除字符串的头尾空格
      if (!this.title.trim()) return
      // nanoid --唯一ID生成器
      const todoObj = {id: nanoid(), title: this.title, done: false}
      this.addTodo(todoObj)
      // 回车键添加成功后，清空todo
      this.title = ''
    }
  }
}
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>