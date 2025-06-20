import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyRizz-rSlcMcZed8lVLqsnZm8ty1vVgg",
  authDomain: "clone-45a15.firebaseapp.com",
  projectId: "clone-45a15",
  storageBucket: "clone-45a15.firebasestorage.app",
  messagingSenderId: "1078085192738",
  appId: "1:1078085192738:web:6cb2651c22167e9eaa4e7b",
  measurementId: "G-F8N1PD08RK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
