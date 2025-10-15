import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAfCB44CG2nlWfscTLHUn3Y4BrQhN1Rmjc",
  authDomain: "parcial2-6e54c.firebaseapp.com",
  databaseURL: "https://parcial2-6e54c-default-rtdb.firebaseio.com",
  projectId: "parcial2-6e54c",
  storageBucket: "parcial2-6e54c.firebasestorage.app",
  messagingSenderId: "970445685477",
  appId: "1:970445685477:web:13832788f8863174b90a0c",
  databaseURL: "https://parcial2-6e54c-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app, auth, db, rtdb };