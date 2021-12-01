
import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBgcAPFdONBNQzCFe6dOq-G_Be7TAip6qM",
    authDomain: "friends-app-41e9e.firebaseapp.com",
    projectId: "friends-app-41e9e",
    storageBucket: "friends-app-41e9e.appspot.com",
    messagingSenderId: "991430131094",
    appId: "1:991430131094:web:808d3c24387cbda3ebb1b7",
    measurementId: "G-JHD93FCCE0"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)