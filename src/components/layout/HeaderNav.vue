<template>
  <header class="mb-4">
    <nav class="w-100 px-10 py-4 bg-white text-primary font-bold shadow-md">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between items-baseline">
        <router-link id="logo" :to="logoLink">
          <h1 class="text-3xl">83Todo</h1>
        </router-link>
        <ul class="flex flex-col sm:flex-row sm:align-center sm:justify-center">
          <li class="sm:mx-4 py-1" v-if="isAuthenticated">{{ userName }}</li>
          <base-button v-if="!isAuthenticated" link to="/sign-up" class="my-1 sm:my-0 sm:mx-2 py-1 px-2">
            Sign Up
          </base-button>
          <base-button v-if="!isAuthenticated" link to="/login" class="my-1 sm:my-0 sm:mx-2 py-1 px-2" buttonStyle="reversed">
            Log In
          </base-button>
          <base-button 
            id="signout"
            v-if="isAuthenticated" 
            @click="handleSignOut" 
            class="font-normal py-1 px-2"
          >
            Sign Out
          </base-button>
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

const isAuthenticated = computed(() => {
  if (user.value) return true;
  else return false;
})
const logoLink = computed(() => {
  if (user.value) return "/dashboard";
  else return "/";
});
const userName = computed(() => {
  if (user.value) {
    return user.value.email.split('@')[0];
  }
  else return '';
})

const handleSignOut = () => {
  signOutUser();
  router.push("/");
}
</script>

