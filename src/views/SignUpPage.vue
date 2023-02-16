<template>
  <form @submit.prevent="handleSubmit()">
    <div class="sm:w-full md:w-8/12 lg:w-6/12 mx-auto rounded border-2 shadow-md p-4">
      <h2 class="font-bold text-xl mb-4">Sign Up</h2>
      <base-input
        name="Email Address"
        id="email"
        type="email"
        v-model="email"
      />
      <base-input 
        name="Password"
        type="password" 
        id="password"
        v-model="password"
      />
      <base-button @click="handleSubmit" type="submit">
        Submit
      </base-button>
      <base-button link to="/">
        Go Back
      </base-button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { signUpUser } from "../utils/firebase/auth.utils";
import { useRouter } from "vue-router";

const email = ref('');
const password = ref('');
const router = useRouter();

const handleSubmit = async() => {
  if (!email.value || !password.value) return;

  try {
    await signUpUser(email.value, password.value);
    router.push("/dashboard");
  } catch(err) {
    console.log(err);
  }
}
</script>