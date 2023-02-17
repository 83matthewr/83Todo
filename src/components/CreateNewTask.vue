<template>
  <div class="mt-6">
    <base-input v-model="newTask" id="new_task" name="Create a New Task" type="text" class="w-64" />
    <base-button @click="addTaskClick">Add New Task</base-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createNewTaskDoc } from '../utils/firebase/db.utils';
import { useCurrentUser } from 'vuefire';

const user = useCurrentUser();
const newTask = ref('');

const addTaskClick = () => {
  console.log("Clicked");
  if (newTask.value !== '') {
    createNewTaskDoc(user.value.uid, newTask.value);
  }
}
</script>