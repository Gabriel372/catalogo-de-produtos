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
