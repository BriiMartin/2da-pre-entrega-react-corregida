import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyKgCe0KzsKM-UcRisgfQiK2Ru3Swl_OM",
  authDomain: "react-ecommerce-c89d6.firebaseapp.com",
  projectId: "react-ecommerce-c89d6",
  storageBucket: "react-ecommerce-c89d6.appspot.com",
  messagingSenderId: "1045253105102",
  appId: "1:1045253105102:web:ead5e7362ca2a2deb6379f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)