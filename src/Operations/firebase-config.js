// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqjOQ16FGmrng7rIAxzdmD_DIZy5o_QmY",
  authDomain: "abit-attendance.firebaseapp.com",
  projectId: "abit-attendance",
  storageBucket: "abit-attendance.appspot.com",
  messagingSenderId: "635035352152",
  appId: "1:635035352152:web:a4c3de5b48846869e7de2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
// const analytics = getAnalytics(app);
export { db , auth }