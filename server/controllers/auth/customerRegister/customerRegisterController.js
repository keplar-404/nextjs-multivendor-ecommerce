import auth from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import CustomerModel from "../../../models/customerModel/customerModel";

const registerCustomer = async (req, res, next) => {
  const { email, password, username } = req.body;
  const trimedUserName = username.trim();

  const exitsUserNameArray = await CustomerModel.find({
    username: trimedUserName,
  }).select("-order -_id -email -__v -uid -role");

  // if i do not convert this exitsUserNameArray to string an error will appear
  const exitsUserNameString = exitsUserNameArray.toString();
  // console.log( typeof(exitsUserNameString) );
  console.log(exitsUserNameString);
  if (exitsUserNameString.includes(trimedUserName)) {
    res.status(200).json({
      message: "User name has already taken",
      data: exitsUserNameString,
    });
    return;
  }

  try {
    const usrc = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: "user",
    });
    const Email = usrc.user.email;
    const UID = usrc.user.uid;
    const newUser = new CustomerModel({
      username: trimedUserName,
      email: Email,
      uid: UID,
    });
    newUser.save(() => {
      res.status(201).json({
        message: "user created successfully",
        data: newUser,
        data2: usrc.user,
      });
    });
  } catch (err) {
    const errmsg = err.message;
    res.status(400).json({
      message: errmsg,
    });
  }
};

export default registerCustomer;
