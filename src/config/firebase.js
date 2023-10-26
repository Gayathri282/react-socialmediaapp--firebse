// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk-fLT8PItADna1Qe_T473AN8yuekMvhw",
  authDomain: "react-socialmedia-app-7675e.firebaseapp.com",
  projectId: "react-socialmedia-app-7675e",
  storageBucket: "react-socialmedia-app-7675e.appspot.com",
  messagingSenderId: "853015109569",
  appId: "1:853015109569:web:bda4fbf1a6bc80559a1940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app); 