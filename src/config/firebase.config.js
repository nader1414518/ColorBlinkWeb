// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBH2lP6CqOUHqB4r7Wy1KRxAztlO_kBwo",
  authDomain: "colorblinkapp.firebaseapp.com",
  projectId: "colorblinkapp",
  storageBucket: "colorblinkapp.appspot.com",
  messagingSenderId: "657382187275",
  appId: "1:657382187275:web:1ddb86436818683201020e",
  measurementId: "G-TJGPVE8C7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;