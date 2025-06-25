// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL71b4osTiTaKGCHu1kWUK8qttRGdg0Og",
  authDomain: "react-journal-6f57c.firebaseapp.com",
  projectId: "react-journal-6f57c",
  storageBucket: "react-journal-6f57c.firebasestorage.app",
  messagingSenderId: "982468291604",
  appId: "1:982468291604:web:117b01123a76e7e903cb01"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)