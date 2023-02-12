import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
 

const firebaseConfig = {
  apiKey: "AIzaSyCS72cD9YKOppZ6Fh2t79SzQGwEmnwFKPo",
  authDomain: "react-final-34875.firebaseapp.com",
  projectId: "react-final-34875",
  storageBucket: "react-final-34875.appspot.com",
  messagingSenderId: "755004206042",
  appId: "1:755004206042:web:739a1044d26046d0ca6ee3",
  measurementId: "G-NZBP134CGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;