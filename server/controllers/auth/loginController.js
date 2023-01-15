import auth from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomerModel from "../../models/customerModel/customerModel";
import SellerModel from "../../models/sellerModel/sellerModel";

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const Email = email.trim();
  const Password = password.trim();

  try {
    const userc = await signInWithEmailAndPassword(auth, Email, Password);
    const { uid } = userc.user;
    const customerArray = await CustomerModel.find({ uid: uid }).select(
      "-_id -__v"
    );
    const sellerArray = await SellerModel.find({ uid: uid }).select(
      "-_id -__v"
    );

    const customer = customerArray.toString();
    const seller = sellerArray.toString();

    if (seller.includes(uid)) {
      res.status(200).json(sellerArray);
      // next();
    } else if (customer.includes(uid)) {
      res.status(200).json(customerArray);
      // next();
    }
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};
export default login;
