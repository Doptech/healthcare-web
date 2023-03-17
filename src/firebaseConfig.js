// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9MZm3fnzPhOSMOgOxl-SBjE6sknX86Eg",
  authDomain: "healthcare-hackoverflow.firebaseapp.com",
  projectId: "healthcare-hackoverflow",
  storageBucket: "healthcare-hackoverflow.appspot.com",
  messagingSenderId: "556329328610",
  appId: "1:556329328610:web:5a70547b7b02bc5f5463bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();

export const db = getFirestore(app)