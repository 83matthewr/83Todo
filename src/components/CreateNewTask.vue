<template>
  <form @submit.prevent="addTaskClick">
    <div class="mt-4 flex flex-col sm:flex-row align-baseline">
      <base-input 
        v-model="newTask" 
        id="new_task" 
        name="Create a New Task" 
        type="text" 
        class="grow mr-8"
        :error="error"
      />
      <base-button type='submit' class="h-8 mt-2 sm:mt-5 py-0 px-2 text-xs font-semibold" buttonStyle="reversed">
        Add Task
      </base-button>
    </div>
  </form>
  
</template>

<script setup>
import { ref } from 'vue';
import { createNewTaskDoc } from '../utils/firebase/db.utils';
import { useCurrentUser } from 'vuefire';

const user = useCurrentUser();
const newTask = ref('');
const error = ref('');

function addTaskClick() {
  if (newTask.value === '') {
    error.value = "Please enter a value";  
    return;
  }

  createNewTaskDoc(user.value.uid, newTask.value);
  newTask.value = '';
  error.value = '';
}
</script>