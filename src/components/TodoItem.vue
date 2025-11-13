<script setup>
defineProps(['todo'])
defineEmits(['toggle', 'delete'])
</script>

<template>
  <li :data-cy="`todo-${todo.id}`">
    <input type="checkbox" :checked="todo.done" @change="$emit('toggle', todo.id)" />
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.task }}
    </span>
    <button @click="$emit('delete', todo.id)">❌</button>
  </li>
</template>
