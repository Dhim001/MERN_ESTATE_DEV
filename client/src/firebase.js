// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c9e65.firebaseapp.com",
  projectId: "mern-estate-c9e65",
  storageBucket: "mern-estate-c9e65.appspot.com",
  messagingSenderId: "971136719804",
  appId: "1:971136719804:web:775b911e5e9a831b0aa9b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);