import auth from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import CustomerModel from "../../../models/customerModel/customerModel";

const registerCustomer = async (req, res, next) => {
  const { email, password, username } = req.body;
  const trimedUserName = username.trim();
  const trimedEmail = email.trim();

  const exitsUserNameArray = await CustomerModel.find({
    username: trimedUserName,
  }).select("-order -_id -email -__v -uid -role");
  const exitsEmailArray = await CustomerModel.find({
    email: trimedEmail,
  }).select("-order -_id -username -__v -uid -role");
  // if i do not convert this exitsUserNameArray, existsEmailArray to string an error will appear
  const exitsUserNameString = exitsUserNameArray.toString();
  const exitsEmailString = exitsEmailArray.toString();
  // console.log(exitsUserNameString);
  // console.log(typeof(exitsUserNameString));
  if (exitsUserNameString.includes(trimedUserName)) {
    res.status(200).json({
      message: "User name has already taken",
    });
    return;
  } else if (exitsEmailString.includes(trimedEmail)) {
    res.status(200).json({
      message: "Email has already taken",
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
      message: "email alreagey in use",
    });
  }
};

export default registerCustomer;
