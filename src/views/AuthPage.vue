<template>
  <form @submit.prevent="handleSubmit()" novalidate>
    <base-card class="max-w-2xl mx-auto">
      <h2 class="font-bold text-xl mb-2">{{ pageTitle }}</h2>
      <router-link :to="subtitleLink">
        <p class="text-xs text-blue-700 mb-4">{{ subtitle }}</p>
      </router-link>
      <base-input
        name="Email Address"
        id="email"
        type="email"
        v-model="email"
        :error="emailError"
      />
      <base-input 
        name="Password"
        type="password" 
        id="password"
        v-model="password"
        :error="passwordError"
      />
      <div class="flex flex-col sm:flex-row justify-center align-baseline">
        <base-button type="submit" class="mt-4 sm:mt-4 sm:mx-4 py-1 px-10">
          Submit
        </base-button>
        <base-button link to="/" class="mt-2 sm:mt-4 sm:mx-4 py-1 px-10">
          Go Back
        </base-button>
      </div>
    </base-card>
  </form>
</template>

<script setup>
import { AuthErrorCodes } from "@firebase/auth";
import { string } from "yup";
import { ref, computed } from "vue";
import { logInUser, signUpUser } from "../utils/firebase/auth.utils";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const email = ref('');
const emailError = ref('');
const password = ref('');
const passwordError = ref('');

const pageTitle = computed(() => {
  if (route.path === '/login') return "Log In";
  else return "Sign Up";
})
const subtitle = computed(() => {
  if (route.path === '/login') return "Dont have an account? Sign Up";
  else return "Already have an account? Log In";
})
const subtitleLink = computed(() => {
  if (route.path === '/login') return "/sign-up";
  else return "/login";
})

async function handleSubmit() {
  emailError.value = '';
  passwordError.value = '';
  // Validate Email
  try {
    await string().email('Please enter a valid email').required('Please enter a valid email').validate(email.value);
  } catch(err) {
    emailError.value = err.message;
    return;
  }
  // Validate Password
  try {
    await string().required('Please enter a password').validate(password.value);
  } catch(err) {
    passwordError.value = err.message;
    return;
  }
  
  try {
    if (route.path === '/login') await logInUser(email.value, password.value);
    else await signUpUser(email.value, password.value);
    router.push("/dashboard");
  } catch(err) {
    if (err.code === AuthErrorCodes.INVALID_PASSWORD) passwordError.value = "Invalid Credentials"; 
    if (err.code === AuthErrorCodes.EMAIL_EXISTS) emailError.value = "Email already in use"; 
    else passwordError.value = "Invalid Credentials";
  }
}
</script>