import { firebase } from "./index";
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createUserDoc = async (user) => {
  // Check if User Doc already exists
  const userDocSnap = await getDoc(doc(db, "users", user.uid));
  if (userDocSnap.exists()) return;

  // Create new User Doc
  await setDoc(doc(db, "users", user.uid), {
    email: user.email
  });
}

