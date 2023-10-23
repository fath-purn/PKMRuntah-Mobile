import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACwmS_pBr_EPxBrp6m8fZbQYLX14uH9bc",
  authDomain: "pkmruntah.firebaseapp.com",
  projectId: "pkmruntah",
  storageBucket: "pkmruntah.appspot.com",
  messagingSenderId: "758433274854",
  appId: "1:758433274854:web:2870a7fe8ced33732f1427",
  measurementId: "G-LC07N19R48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);