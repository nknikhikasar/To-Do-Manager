<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todoStore'

const todoStore = useTodoStore()
const newTask = ref('')

function addTask() {
  if (newTask.value.trim() === '') return
  todoStore.addTodo(newTask.value)
  newTask.value = ''
}
</script>

<template>
  <input v-model="newTask" placeholder="Enter new task" data-cy="task-input" />
  <button @click="addTask" data-cy="add-btn">Add</button>
</template>
