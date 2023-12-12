// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1acd5.firebaseapp.com",
  projectId: "mern-estate-1acd5",
  storageBucket: "mern-estate-1acd5.appspot.com",
  messagingSenderId: "426500811232",
  appId: "1:426500811232:web:c2221cc153b511464c2385"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);