// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AWi8bFvILrUaFrbAb3j2BFsTv_Ol1io",
  authDomain: "react2-fb5e9.firebaseapp.com",
  projectId: "react2-fb5e9",
  storageBucket: "react2-fb5e9.appspot.com",
  messagingSenderId: "829834731327",
  appId: "1:829834731327:web:e12f13a77c13284bc7bd8a",
  measurementId: "G-JEJVBM5PKL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);