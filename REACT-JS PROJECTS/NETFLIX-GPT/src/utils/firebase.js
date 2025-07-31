// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0jMRx0VhNzriR9Yidrxlil0XIpAhASBU",
  authDomain: "netflix-gpt-8c785.firebaseapp.com",
  projectId: "netflix-gpt-8c785",
  storageBucket: "netflix-gpt-8c785.firebasestorage.app",
  messagingSenderId: "523645147500",
  appId: "1:523645147500:web:72ffe03025a90ce539bb49",
  measurementId: "G-YK3PWFPQ0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);