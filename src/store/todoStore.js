import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(task) {
      this.todos.push({ id: Date.now(), task, done: false })
    },
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.done = !todo.done
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
})
