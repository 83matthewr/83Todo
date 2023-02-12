<template>
  <header class="mb-4">
    <nav class="w-100 px-10 py-4 bg-primary text-white font-bold shadow-md">
      <div class="container mx-auto flex justify-between items-baseline">
        <router-link to="/">
          <h1 class="text-3xl">83Todo</h1>
        </router-link>
        <ul class="flex align-center justify-center">
          <li class="mx-4" v-if="authStore.user">{{ authStore.user.email }}</li>
          <router-link v-if="!authStore.user" to="/sign-up">
            <li class="font-normal hover:underline">Sign Up</li>
          </router-link>
          <router-link v-if="!authStore.user" to="/login">
            <li class="mx-4 font-normal hover:underline">Log In</li>
          </router-link>
          <li v-if="authStore.user" @click="signOutUser" class="font-normal hover:underline">
            Sign Out
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth";
import { signOutUser } from "../../utils/firebase.utils";

const authStore = useAuthStore();
</script>

