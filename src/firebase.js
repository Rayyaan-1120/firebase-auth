import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCRPZp4oTaFOoZd-3IJRzAHePYQsD6ELFQ",
  authDomain: "auth-practice-b4f76.firebaseapp.com",
  projectId: "auth-practice-b4f76",
  storageBucket: "auth-practice-b4f76.appspot.com",
  messagingSenderId: "950279910936",
  appId: "1:950279910936:web:c3067e2e7629dc1ca8356d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)