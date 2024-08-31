// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn_FHoHK4B4ZjdO0PmUmKfBM0U6E0l8m0",
  authDomain: "life-is-bad.firebaseapp.com",
  projectId: "life-is-bad",
  storageBucket: "life-is-bad.appspot.com",
  messagingSenderId: "57717710156",
  appId: "1:57717710156:web:4315a7bb083d9aa463c3e9",
  measurementId: "G-2WWS7FBTNQ"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export {app,auth}
