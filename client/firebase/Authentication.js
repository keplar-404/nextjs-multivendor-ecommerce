import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import dotenv from "dotenv";
dotenv.config();
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const checkUser = (setLoggedinUser) => {
  onAuthStateChanged(auth, (user) => {
    user && setLoggedinUser({ ...user, isAuthenticated: true });
  });
};


export const logoutUser = (setLoggedinUser) => {
  signOut(auth).then(setLoggedinUser({ isAuthenticated: false }));
  location.reload();
};
