// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCShRK4AtdNzqujM72cCAxABdneTK7hJQY",
  authDomain: "react-login-cf389.firebaseapp.com",
  projectId: "react-login-cf389",
  storageBucket: "react-login-cf389.appspot.com",
  messagingSenderId: "823535104445",
  appId: "1:823535104445:web:76676c14abf97bf439a2d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);