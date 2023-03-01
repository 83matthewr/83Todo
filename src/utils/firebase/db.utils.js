import { firebaseApp } from "../../firebase";
import { 
  getFirestore,
  doc,
  collection,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
  where,
  query,
  orderBy
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

export const createNewTaskDoc = async (userId, taskTitle) => {
  try {
    if (!userId) return;

    await addDoc(collection(db, "tasks"), {
      title: taskTitle,
      user_id: userId,
      notes: '',
      completed: false,
      date_created: Timestamp.now()
    });
  } catch(err) {
    console.log(err);
  }
}

export const updateTaskStatus = async (taskId, status) => {
  try {
    await updateDoc(doc(db, 'tasks', taskId), {
      completed: status
    });
  } catch(err) {
    console.log(err);
  }
}

export const deleteTask = async (taskId) => {
  try {
    await deleteDoc(doc(db, 'tasks', taskId));
  } catch(err) {
    console.log(err);
  }
}

export const getTaskSource = (taskId) => {
  return doc(collection(db, 'tasks'), taskId);
}

export const getTasksQuery = (userId) => {
  return query(collection(db, "tasks"), where("user_id", "==", userId), orderBy("date_created"));
}