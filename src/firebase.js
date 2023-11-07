// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOqx3uzh9XsVpH8X2s5arAZPtkrNW1-PU",
    authDomain: "react4-cdf79.firebaseapp.com",
    projectId: "react4-cdf79",
    storageBucket: "react4-cdf79.appspot.com",
    messagingSenderId: "181629766404",
    appId: "1:181629766404:web:3165ef3db5154cf9e8de51",
    measurementId: "G-3G9VG5JR4Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
