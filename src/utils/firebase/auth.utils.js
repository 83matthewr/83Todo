import { firebaseApp } from "../../firebase";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export const auth = getAuth(firebaseApp);

export const signUpUser = async (email, password) => {
  // TODO: perform validation on email and password
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const logInUser = async (email, password) => {
  // TODO: perform validation on email and password
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);