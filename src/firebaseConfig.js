import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARLSRGZ7eyoU7AKmEuxiblzFtf2vC9gLU",
  authDomain: "proyecto-cursada-1.firebaseapp.com",
  projectId: "proyecto-cursada-1",
  storageBucket: "proyecto-cursada-1.firebasestorage.app",
  messagingSenderId: "755830440992",
  appId: "1:755830440992:web:5e694c6009c253c0b66845",
  measurementId: "G-97N6ETSS3B",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
