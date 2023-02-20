<template>
  <div class="container flex flex-col sm:flex-row justify-center">
    <base-card title="Todo List" class="flex-1">
      <task-list-card :tasks="tasks"/>
      <hr/>
      <create-new-task />
    </base-card>
    <base-card class="flex-1">
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
import { db } from "../utils/firebase/db.utils";
import { doc, collection, query, where, orderBy } from "firebase/firestore";
import { useCollection, useCurrentUser, useDocument } from "vuefire";

const user = useCurrentUser();
const route = useRoute()

const taskSource = computed(() => {
  if (route.params.id) {
    return doc(collection(db, 'tasks'), route.params.id);
  } else {
    return null;
  }
});

const tasksQuery = query(collection(db, "tasks"), where("user_id", "==", user.value.uid), orderBy("date_created"));
const tasks = useCollection(tasksQuery);
const selectedTask = useDocument(taskSource);
</script>