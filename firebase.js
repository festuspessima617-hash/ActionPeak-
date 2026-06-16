import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe5AuRKGx2jOloaKXm-TUCBxhkNfbTOzc",
    authDomain: "actionpeak-6cb3b.firebaseapp.com",
    projectId: "actionpeak-6cb3b",
    storageBucket: "actionpeak-6cb3b.firebasestorage.app",
    messagingSenderId: "183604553048",
    appId: "1:183604553048:web:5ce8278217158f7098b12d",
    measurementId: "G-ZEF82ZJQRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db };