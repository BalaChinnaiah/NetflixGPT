// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBueVlqBxgr-eZUUNrX7S3hbBCpjFiXODo",
  authDomain: "netflixgpt-49a8c.firebaseapp.com",
  projectId: "netflixgpt-49a8c",
  storageBucket: "netflixgpt-49a8c.firebasestorage.app",
  messagingSenderId: "525264424150",
  appId: "1:525264424150:web:b8cef6f22ee240fa4d4d77",
  measurementId: "G-XWD4K3E9L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);