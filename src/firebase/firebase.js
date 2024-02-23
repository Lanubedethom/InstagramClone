import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvwoANMaXcLW_FWzcS8_0WU4TMsaFUi88",
  authDomain: "instagram-d0aa7.firebaseapp.com",
  projectId: "instagram-d0aa7",
  storageBucket: "instagram-d0aa7.appspot.com",
  messagingSenderId: "1065736997983",
  appId: "1:1065736997983:web:740334c62812cd51fa9fea",
  measurementId: "G-KWFX79060V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };