<template>
  <section class="border rounded p-4 w-6/12 shadow-md">
    <h2 class="text-xl font-bold mb-4">Todo List</h2>
    <ul>
      <li 
        v-for="task in tasks" 
        :key="task.title" 
        @click="taskClickHandler(task.id)"
        class="rounded px-2 py-1 my-2 bg-primary hover:bg-primary-hover 
              text-white shadow-sm hover:shadow-lg cursor-pointer"
      >
        {{ task.title }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { db } from "../utils/firebase/db.utils";
import { collection, query, where } from "firebase/firestore";
import { useRouter } from "vue-router";
import { useCollection, useCurrentUser } from "vuefire";

const router = useRouter();
const user = useCurrentUser();

const tasksQuery = query(collection(db, "tasks"), where("user_id", "==", user.value.uid));
const tasks = useCollection(tasksQuery);

function taskClickHandler(id) {
  router.push(`/${id}`);
}
</script>