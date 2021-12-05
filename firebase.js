// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc-Ml9YnH7odnP5cn61siQv5YDCPHqj-o",
  authDomain: "instagram-clone-bce2b.firebaseapp.com",
  projectId: "instagram-clone-bce2b",
  storageBucket: "instagram-clone-bce2b.appspot.com",
  messagingSenderId: "266236279290",
  appId: "1:266236279290:web:85eb298ebcf217e69c8c43",
  measurementId: "G-XZ9CW749MW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
/* const analytics = getAnalytics(app); */

export { app, db, storage };
