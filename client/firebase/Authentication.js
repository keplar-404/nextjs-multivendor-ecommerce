import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAz_lEV49bBnadpK4Sa0mDOb6zURFhQ2s",
  authDomain: "ecom-keplar.firebaseapp.com",
  projectId: "ecom-keplar",
  storageBucket: "ecom-keplar.appspot.com",
  messagingSenderId: "185069600372",
  appId: "1:185069600372:web:96a071924545677a86db21",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const checkUser =async(setLoggedinUser) => {
//  await onAuthStateChanged(auth, (user) => {
//     user && setLoggedinUser(user);
//   });
// };

// export const logoutUser =(setLoggedinUser) => {
//   signOut(auth).then(setLoggedinUser({ isAuthenticated: false }));
//   location.reload();
// };
