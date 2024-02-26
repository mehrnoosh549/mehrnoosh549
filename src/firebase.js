// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"; // Fix the typo here

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoa8dYdwhRk9n2SyLJyrlwOqHfHTdxhPA",
  authDomain: "ptr-immigration.firebaseapp.com",
  databaseURL: "https://ptr-immigration-default-rtdb.firebaseio.com",
  projectId: "ptr-immigration",
  storageBucket: "ptr-immigration.appspot.com",
  messagingSenderId: "661208901257",
  appId: "1:661208901257:web:cdcce0b513beadb94bc858",
  measurementId: "G-63Q66M0R3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app); 