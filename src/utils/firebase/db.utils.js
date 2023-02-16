import { firebaseApp } from "../../firebase";
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export const db = getFirestore(firebaseApp);

export const createUserDoc = async (user) => {
  try {
    if (!user) return;
    // Check if User Doc already exists
    const userDocSnap = await getDoc(doc(db, "users", user.uid));
    if (userDocSnap.exists()) return;

    // Create new User Doc
    await setDoc(doc(db, "users", user.uid), {
      email: user.email
    });
  } catch(err) {
    console.log(err);
    return;
  }
}
