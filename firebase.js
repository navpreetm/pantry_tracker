// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3lH0j7VkJtnxuyTYxN1BMlJMjKkRy2zU",
  authDomain: "inventory-management-9cda5.firebaseapp.com",
  projectId: "inventory-management-9cda5",
  storageBucket: "inventory-management-9cda5.appspot.com",
  messagingSenderId: "520557280461",
  appId: "1:520557280461:web:155fb116b3d9341a07fd84",
  measurementId: "G-TMGCJWGVKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };
