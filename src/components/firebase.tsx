import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaaoapcNTsqOUAri_vQjOqXTAu4GWJHxY",
  authDomain: "cadastro-de-membros-3462c.firebaseapp.com",
  projectId: "cadastro-de-membros-3462c",
  storageBucket: "cadastro-de-membros-3462c.appspot.com",
  messagingSenderId: "225864147713",
  appId: "1:225864147713:web:c403749dbc145451fe7100",
  measurementId: "G-F8JDB3T2FK"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCaaoapcNTsqOUAri_vQjOqXTAu4GWJHxY",
//   authDomain: "cadastro-de-membros-3462c.firebaseapp.com",
//   projectId: "cadastro-de-membros-3462c",
//   storageBucket: "cadastro-de-membros-3462c.appspot.com",
//   messagingSenderId: "225864147713",
//   appId: "1:225864147713:web:26811d2591cbf727fe7100",
//   measurementId: "G-CDZ2Z2405P"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);