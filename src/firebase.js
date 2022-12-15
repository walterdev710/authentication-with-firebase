// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkXUp3ItRW5bMwzGm2Q-5iAN0zHcZl0XI",
  authDomain: "auth-firebase-9f0fc.firebaseapp.com",
  projectId: "auth-firebase-9f0fc",
  storageBucket: "auth-firebase-9f0fc.appspot.com",
  messagingSenderId: "69313510892",
  appId: "1:69313510892:web:07e12f6ae5130e03d6d4c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;