import auth from "../controllers/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const checkCurrentUser = (req, res, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log( "user loged in" );
      next();
    } else {
    console.log( "user not log in" );
      return
    }
  });
};

export default checkCurrentUser;
