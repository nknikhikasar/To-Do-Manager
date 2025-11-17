<script setup>
import AddTodo from '../components/AddTodo.vue'
import TodoItem from '../components/TodoItem.vue'
import { useTodoStore } from '../store/todoStore'

const todoStore = useTodoStore()
</script>

<template>
  <h1>Hello NK</h1>
  <h2>Todo Manager</h2>
  <AddTodo />
  <ul>
    <TodoItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo"
      @toggle="todoStore.toggleTodo"
      @delete="todoStore.deleteTodo"
    />
  </ul>
</template>
