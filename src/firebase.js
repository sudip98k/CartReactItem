// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9FogCETB6_wiQbewRLkWzvC4RsZIQC7o",
  authDomain: "cart-98828.firebaseapp.com",
  projectId: "cart-98828",
  storageBucket: "cart-98828.appspot.com",
  messagingSenderId: "970266053689",
  appId: "1:970266053689:web:c3c6789e9dd7b96ae8d1e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);