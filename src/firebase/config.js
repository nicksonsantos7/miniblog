// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Banco de dados
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8KoXi269Y_7xCHSlYmtm1A43nv8dR36E",
  authDomain: "miniblognss.firebaseapp.com",
  projectId: "miniblognss",
  storageBucket: "miniblognss.appspot.com",
  messagingSenderId: "538829187598",
  appId: "1:538829187598:web:dacabf64b222de6b5b2a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };