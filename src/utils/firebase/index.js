import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8p-kdiWM3wwBEF8Vx5e9iJycCXvNhObU",
  authDomain: "todo-2918a.firebaseapp.com",
  projectId: "todo-2918a",
  storageBucket: "todo-2918a.appspot.com",
  messagingSenderId: "227328148994",
  appId: "1:227328148994:web:af6d0b904c84a0177e091b"
};

export const firebase = initializeApp(firebaseConfig);