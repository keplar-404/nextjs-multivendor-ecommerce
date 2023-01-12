import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyCAz_lEV49bBnadpK4Sa0mDOb6zURFhQ2s",
  authDomain:"ecom-keplar.firebaseapp.com",
  projectId:"ecom-keplar",
  storageBucket:"ecom-keplar.appspot.com",
  messagingSenderId:"185069600372",
  appId:"1:185069600372:web:96a071924545677a86db21",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const signIn = (Email, Password) => {
  signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const checkUser = (setLoggedinUser) => {
  onAuthStateChanged(auth, (user) => {
    user && setLoggedinUser({ ...user, isAuthenticated: true });
  });
};


export const logoutUser = (setLoggedinUser) => {
  signOut(auth).then(setLoggedinUser({ isAuthenticated: false }));
  location.reload();
};
