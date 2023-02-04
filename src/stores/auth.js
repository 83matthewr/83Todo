import { defineStore } from "pinia";
import { ref } from "vue";
import { onAuthStateChangedListener } from "../utils/firebase.utils";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  onAuthStateChangedListener((authUser) => {
    user.value = authUser;
  });

  return {
    user
  }
})