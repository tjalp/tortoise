// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqlaz73bySbDW2t8s8aK_GQnw2A0QC2PU",
  authDomain: "tortoise-application.firebaseapp.com",
  projectId: "tortoise-application",
  storageBucket: "tortoise-application.appspot.com",
  messagingSenderId: "273632551018",
  appId: "1:273632551018:web:a0433b22c137eefaf1aa13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);