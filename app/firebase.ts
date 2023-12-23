// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpiGtg_mnIE_id_-Bv43FO-VsUCZMrPRs",
  authDomain: "chatauth-151ca.firebaseapp.com",
  projectId: "chatauth-151ca",
  storageBucket: "chatauth-151ca.appspot.com",
  messagingSenderId: "484046494549",
  appId: "1:484046494549:web:4ae4f3e3711795b5166ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage:any = getStorage();
