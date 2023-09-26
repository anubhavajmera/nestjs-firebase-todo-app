import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASz-c4tGIkc5weAHKlVXs0JTOJybNfMro",
    authDomain: "nextjs-todo-app-e6cf6.firebaseapp.com",
    projectId: "nextjs-todo-app-e6cf6",
    storageBucket: "nextjs-todo-app-e6cf6.appspot.com",
    messagingSenderId: "595617593925",
    appId: "1:595617593925:web:cbceeb08b35d764279812c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
