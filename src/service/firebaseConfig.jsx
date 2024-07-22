
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCx9WB0smi29irD5k7VRq6SBW24uZCnKcw",
  authDomain: "ai-trip-planner-b5df4.firebaseapp.com",
  projectId: "ai-trip-planner-b5df4",
  storageBucket: "ai-trip-planner-b5df4.appspot.com",
  messagingSenderId: "255330001657",
  appId: "1:255330001657:web:869ef869c3b01df9fef828",
  measurementId: "G-2KFDEDSWL0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)