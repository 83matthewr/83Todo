<template>
  <header-nav></header-nav>
  <div class="container">
    <h1>Todo App</h1>
    <section class="todo-list">
      <p>Todo List</p>
      <ul>
        <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
      </ul>
    </section>
    <section class="todo-input-div">
      <p>Todo Input</p>
      <label for="todo-input">Add a Task:</label>
      <input id="todo-input" type="text" v-model="todoInput" />
      <button :onClick="addTodo">Add Todo</button>
    </section>
  </div>
</template>

<script setup>
import HeaderNav from "./components/layout/HeaderNav.vue";
import { ref } from "vue";
import DATA from "./dummy_data";

const todos = ref(DATA);
const todoInput = ref("");

const addTodo = (e) => {
  e.preventDefault();

  if (todoInput.value === "") return;

  const newTodo = {
    text: todoInput.value,
  };

  todos.value.push(newTodo);
};
</script>

