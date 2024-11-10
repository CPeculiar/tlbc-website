
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAK8LK8gJTIbhbiLb2TOzdt7V6V6rD73OQ",
  authDomain: "tlbc-website-fea0c.firebaseapp.com",
  projectId: "tlbc-website-fea0c",
  storageBucket: "tlbc-website-fea0c.firebasestorage.app",
  messagingSenderId: "752932440220",
  appId: "1:752932440220:web:aadc71637e9ba25c5fc559",
  measurementId: "G-F8DS6PH8KR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;