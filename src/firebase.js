// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1yh8iRu-r7GnRxdr3xXzxNb8dkFyRLBc",
  authDomain: "react1-322d9.firebaseapp.com",
  projectId: "react1-322d9",
  storageBucket: "react1-322d9.appspot.com",
  messagingSenderId: "377925761959",
  appId: "1:377925761959:web:65e7d4b01eafbeb5d95482",
  measurementId: "G-LVY3N53KK1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);