// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2TP8ParCkXoEZH5PokBzsEOrvzliB8YA",
  authDomain: "practice-1e3aa.firebaseapp.com",
  projectId: "practice-1e3aa",
  storageBucket: "practice-1e3aa.appspot.com",
  messagingSenderId: "826100748001",
  appId: "1:826100748001:web:b9242e8361a096a520b1a0",
  measurementId: "G-G08RFFZ41T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// const analytics = getAnalytics(app);
export { db }