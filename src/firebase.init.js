// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCABrTwIYi8bbdU_xXpJSwuds7IpOGFiiE",
  authDomain: "my-simple-twitter.firebaseapp.com",
  projectId: "my-simple-twitter",
  storageBucket: "my-simple-twitter.appspot.com",
  messagingSenderId: "89257820985", 
  appId: "1:89257820985:web:efdbec8015b7e0feda9ee8",
  measurementId: "G-WRZFVHT7C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;