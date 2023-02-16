<template>
  <header class="mb-4">
    <nav class="w-100 px-10 py-4 bg-primary text-white font-bold shadow-md">
      <div class="container mx-auto flex justify-between items-baseline">
        <router-link :to="logoLink">
          <h1 class="text-3xl">83Todo</h1>
        </router-link>
        <ul class="flex align-center justify-center">
          <li class="mx-4" v-if="user">{{ user.email }}</li>
          <router-link v-if="!user" to="/sign-up">
            <li class="font-normal hover:underline">Sign Up</li>
          </router-link>
          <router-link v-if="!user" to="/login">
            <li class="mx-4 font-normal hover:underline">Log In</li>
          </router-link>
          <li v-if="user" @click="handleSignOut" class="font-normal hover:underline">
            Sign Out
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCurrentUser } from 'vuefire';
import { signOutUser } from "../../utils/firebase/auth.utils";

const user = useCurrentUser();
const router = useRouter();

const logoLink = computed(() => {
  if (user.value) return "/dashboard";
  else return "/";
});

const handleSignOut = () => {
  signOutUser();
  router.push("/");
}
</script>

