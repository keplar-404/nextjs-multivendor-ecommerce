import auth from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
const logout = async (req, res, next) => {
  try {
    await signOut(auth);
    res.status(200).json({
      message: "user logout successfully",
    });
    // next()
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default logout;
