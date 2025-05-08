// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_ao_AxS87f3DxwiD1Cch5vD-rOZ9Y-WE",
  authDomain: "chat-application-c13b0.firebaseapp.com",
  projectId: "chat-application-c13b0",
  storageBucket: "chat-application-c13b0.firebasestorage.app",
  messagingSenderId: "316665434543",
  appId: "1:316665434543:web:f9ab829f87a655db4b5f5a",
  measurementId: "G-GXW99S646D",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
