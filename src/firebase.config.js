import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_F4H7vDM3HfsMomo82MpETn8m-KJFM6Y",
  authDomain: "online-market-project-58ce5.firebaseapp.com",
  projectId: "online-market-project-58ce5",
  storageBucket: "online-market-project-58ce5.appspot.com",
  messagingSenderId: "572195897831",
  appId: "1:572195897831:web:3a0239afa6db5a444abd42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()