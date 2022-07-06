import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWpQMRhdmVkSKVgGZOz5oGKDmr2codNnc",
  authDomain: "askm-53eba.firebaseapp.com",
  projectId: "askm-53eba",
  storageBucket: "askm-53eba.appspot.com",
  messagingSenderId: "461177366851",
  appId: "1:461177366851:web:10771050bd9a0a1c1667f6",
};

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
