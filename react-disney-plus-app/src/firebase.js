// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"  //authenticatioin 기능 사용을 위한 import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMbmJzFnd1MsNOjgFC4V3eg1KiQ5qkIkU",
  authDomain: "react-disney-plus-app-71640.firebaseapp.com",
  projectId: "react-disney-plus-app-71640",
  storageBucket: "react-disney-plus-app-71640.firebasestorage.app",
  messagingSenderId: "630883104407",
  appId: "1:630883104407:web:597d5f32a0d21809399bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;