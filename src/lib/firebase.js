import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyBr3rMGFy93IyjMivWu237SlqPPmZK9t60", // env 파일에 이 apiKey 등록 하고, 가져오기
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-1a68b.firebaseapp.com",
  projectId: "react-chat-1a68b",
  storageBucket: "react-chat-1a68b.appspot.com",
  messagingSenderId: "418038423296",
  appId: "1:418038423296:web:c697276b00ff7715b79de5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
