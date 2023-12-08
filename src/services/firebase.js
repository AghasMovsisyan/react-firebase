// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2M2hjPY4iwgh3hRFbqUS3a3VeHCaw1Hs',
  authDomain: 'reac6-3a192.firebaseapp.com',
  projectId: 'reac6-3a192',
  storageBucket: 'reac6-3a192.appspot.com',
  messagingSenderId: '391858332405',
  appId: '1:391858332405:web:d31aaa5b9d93a0690f5bbc',
  measurementId: 'G-D9PV9QKXZX',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
