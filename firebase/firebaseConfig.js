import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACwmS_pBr_EPxBrp6m8fZbQYLX14uH9bc",
  authDomain: "pkmruntah.firebaseapp.com",
  projectId: "pkmruntah",
  storageBucket: "pkmruntah.appspot.com",
  messagingSenderId: "758433274854",
  appId: "1:758433274854:web:2870a7fe8ced33732f1427",
  measurementId: "G-LC07N19R48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Android: 758433274854-qptgd2p2fvjnb9crg26mdau49ofb86qg.apps.googleusercontent.com
// ios: 758433274854-2cnhd8sna5ssvr946iuoapd3rq3bk67o.apps.googleusercontent.com
