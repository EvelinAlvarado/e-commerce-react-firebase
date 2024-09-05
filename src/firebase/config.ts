// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//*1-----Import getFirestore: to get a database hosting in firebase
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5ZiyFCs3j7Wh3VKuufOvfUKPJI8D6KQ",
  authDomain: "simple-store-clothes.firebaseapp.com",
  projectId: "simple-store-clothes",
  storageBucket: "simple-store-clothes.appspot.com",
  messagingSenderId: "568726250852",
  appId: "1:568726250852:web:835887005bb5289852c671",
  measurementId: "G-H84FM05JKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//*2------Initialize Firestore and exporting to use everywhere
export const db: Firestore = getFirestore(app);
