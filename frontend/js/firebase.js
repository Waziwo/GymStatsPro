// frontend/js/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfig from './config.js';

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// Eksport instancji Firestore i Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };