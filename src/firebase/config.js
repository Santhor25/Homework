import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBg_xRutbuIs29IoZfNkFth5-nWYZiFjAo",
  authDomain: "proyectouao-58cf3.firebaseapp.com",
  projectId: "proyectouao-58cf3",
  storageBucket: "proyectouao-58cf3.firebasestorage.app",
  messagingSenderId: "1002286817413",
  appId: "1:1002286817413:web:636edce3da4b2144ca89ec",
  measurementId: "G-JV5V03TZ2N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app, analytics, auth}