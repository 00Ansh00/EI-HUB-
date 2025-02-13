// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA32lYznnwaNPPG_xR_N4b4AB7LOxIPEUg",
  authDomain: "ei-hub-6612b.firebaseapp.com",
  projectId: "ei-hub-6612b",
  storageBucket: "ei-hub-6612b.firebasestorage.app",
  messagingSenderId: "852517243357",
  appId: "1:852517243357:web:bf0c89e2f00e35cde7ce34",
  measurementId: "G-XH0XS7KRG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);