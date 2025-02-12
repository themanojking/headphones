// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1sdEu7GcB_I63AZFYzA-T-nXw8auiH3g",
  authDomain: "head-8fcfe.firebaseapp.com",
  projectId: "head-8fcfe",
  storageBucket: "head-8fcfe.firebasestorage.app",
  messagingSenderId: "913066734678",
  appId: "1:913066734678:web:0d294967ec7de9eeae77f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);