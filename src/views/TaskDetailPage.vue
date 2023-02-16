<template>
  <div v-if="task">
    <h2>{{ task.title }}</h2>
    <p>{{ task.notes }}</p>
    <p>Completed: {{ task.completed }}</p>
  </div>
  <base-button link to="/dashboard">
    Go Back
  </base-button>
</template>

<script setup>
import { db } from "../utils/firebase/db.utils";
import { useDocument } from "vuefire";
import { useRoute } from "vue-router";
import { doc } from "firebase/firestore";
const route = useRoute();

const task = useDocument(doc(db, "tasks",route.params.id));
</script>