
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgvr4Rzqv_dGoLVFsCIe4LY2pUiH7O39Q",
  authDomain: "shoppingwebsite-ce848.firebaseapp.com",
  projectId: "shoppingwebsite-ce848",
  storageBucket: "shoppingwebsite-ce848.appspot.com",
  messagingSenderId: "800801836180",
  appId: "1:800801836180:web:5e8fa79bd9ee194305f881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;





