// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYfgdzYQqqUyIj1QoMPZsZbdpW9hnk02o",
  authDomain: "life-is-fucked-up.firebaseapp.com",
  projectId: "life-is-fucked-up",
  storageBucket: "life-is-fucked-up.appspot.com",
  messagingSenderId: "31091965931",
  appId: "1:31091965931:web:1be4f38d243d1c6360e3ae",
  measurementId: "G-HQ1G5WRGML"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export {app,auth}
