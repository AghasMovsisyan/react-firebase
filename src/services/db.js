// db.js
import { collection } from 'firebase/firestore';
import { db } from './firebase';

export const listCollectionRef = collection(db, 'list');
