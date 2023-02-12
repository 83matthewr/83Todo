import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8p-kdiWM3wwBEF8Vx5e9iJycCXvNhObU",
  authDomain: "todo-2918a.firebaseapp.com",
  projectId: "todo-2918a",
  storageBucket: "todo-2918a.appspot.com",
  messagingSenderId: "227328148994",
  appId: "1:227328148994:web:af6d0b904c84a0177e091b"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUpUser = async (email, password) => {
  // TODO: perform validation on email and password
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const logInUser = async (email, password) => {
  // TODO: perform validation on email and password
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);