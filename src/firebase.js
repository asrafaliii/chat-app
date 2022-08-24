// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAs4G5ReNb4o4xvLxRJuF1BStbKBgUr5A",
  authDomain: "chat-app-4c3dc.firebaseapp.com",
  projectId: "chat-app-4c3dc",
  storageBucket: "chat-app-4c3dc.appspot.com",
  messagingSenderId: "1001166120544",
  appId: "1:1001166120544:web:9639962afb3b2b87bf8505",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
