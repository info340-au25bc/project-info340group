// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATjiNhUEay5xokj74KRqCo_V91zpsTvgs",
  authDomain: "thrivetogether-6dc34.firebaseapp.com",
  databaseURL: "https://thrivetogether-6dc34-default-rtdb.firebaseio.com",
  projectId: "thrivetogether-6dc34",
  storageBucket: "thrivetogether-6dc34.firebasestorage.app",
  messagingSenderId: "1071513797222",
  appId: "1:1071513797222:web:5c81c21bcdd86e723d23a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
