// import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC03x21Z9viVIY2S4HSMOLeQGLybMtPSQ",
  authDomain: "netflix-clone-web-app-2022.firebaseapp.com",
  projectId: "netflix-clone-web-app-2022",
  storageBucket: "netflix-clone-web-app-2022.appspot.com",
  messagingSenderId: "566149516882",
  appId: "1:566149516882:web:37e9d6c6f0e0080040598b",
  measurementId: "G-162B7PQ42G"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
