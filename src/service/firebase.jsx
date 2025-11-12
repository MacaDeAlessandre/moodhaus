// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxUbER_ttRO1cFIkN3iaq0N3Zeiacmigg",
    authDomain: "mood-house.firebaseapp.com",
    projectId: "mood-house",
    storageBucket: "mood-house.firebasestorage.app",
    messagingSenderId: "1096646198895",
    appId: "1:1096646198895:web:b6ee1dc77c07b8ef516f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);