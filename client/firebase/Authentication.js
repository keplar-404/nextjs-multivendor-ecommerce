import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "apikey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
};

const app = initializeApp(firebaseConfig);
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
