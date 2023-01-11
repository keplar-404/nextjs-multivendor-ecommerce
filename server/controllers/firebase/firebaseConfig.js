import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import config from "../../config/config";
const firebaseConfig = config;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

export const checkUser = (setLoggedinUser) => {
  onAuthStateChanged(auth, (user) => {
    user && setLoggedinUser({ ...user, isAuthenticated: true });
  });
};

export const logoutUser = (setLoggedinUser) => {
  signOut(auth).then(setLoggedinUser({ isAuthenticated: false }));
  location.reload();
};
