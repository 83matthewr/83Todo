import { defineStore } from "pinia";
import { ref } from "vue";
import { onAuthStateChangedListener } from "../utils/firebase/auth.utils";
import { createUserDoc } from "../utils/firebase/db.utils";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  onAuthStateChangedListener(async (authUser) => {
    user.value = authUser;
    try {
      await createUserDoc(authUser);
    } catch(err) {
      console.log(err);
    }
  });

  return {
    user
  }
})