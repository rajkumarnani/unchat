import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAXDf6iSUR2A_ddLqsh8ulO9GG4tG2dTc",
  authDomain: "chat-347db.firebaseapp.com",
  projectId: "chat-347db",
  storageBucket: "chat-347db.appspot.com",
  messagingSenderId: "454696638541",
  appId: "1:454696638541:web:4f138342c55afd5e042404",
  measurementId: "G-1ZTH8JVJJB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
