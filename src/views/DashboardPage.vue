<template>
  <div class="container flex flex-col sm:flex-row justify-center">
    <base-card id="task-list-card" class="flex-1">
      <h2 class="text-3xl font-semibold">Todo List</h2>
      <task-list-card :tasks="tasks"/>
      <hr/>
      <create-new-task />
    </base-card>
    <base-card id="task-detail-card" class="flex-1">
      <task-detail-card v-if="taskSource" :task="selectedTask"/>
      <div v-else class="w-full h-full bg-gray-100 flex justify-center items-center">
        <p class="h-10">Select a task</p>
      </div>
    </base-card>
  </div>
</template>

<script setup>
import TaskListCard from '../components/TaskListCard.vue';
import TaskDetailCard from '../components/TaskDetailCard.vue';
import CreateNewTask from '../components/CreateNewTask.vue';

import { computed } from 'vue';
import { useRoute } from "vue-router";
import { getTaskSource, getTasksQuery } from "../utils/firebase/db.utils";
import { useCurrentUser, useCollection, useDocument } from "vuefire";

const user = useCurrentUser();
const route = useRoute()

const taskSource = computed(() => {
  if (route.params.id) {
    return getTaskSource(route.params.id);
  } else {
    return null;
  }
});

const tasksQuery = getTasksQuery(user.value.uid);
const tasks = useCollection(tasksQuery);
const selectedTask = useDocument(taskSource);
</script>