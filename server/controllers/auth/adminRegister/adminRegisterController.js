import auth from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import AdminModel from "../../../models/adminModel/adminModel";

const registerAdmin = async (req, res, next) => {
  const { email, password, username } = req.body;
  const trimedUserName = String(username.trim()) ;
  const ShopName = "admin"

  const exitsUserNameArray = await AdminModel.find({
    username: trimedUserName
  }).select(
    "-_id -email -__v -uid -role -shopname -totalearning -products -productpending -productdeliverd -delivertoadmin"
  );


  // if i do not convert this exitsUserNameArray to string an error will appear
  const exitsUserNameString = exitsUserNameArray.toString();
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
        displayName: 'admin'
      })
      const Email = usrc.user.email;
      const UID = usrc.user.uid;
      const newSeller = new AdminModel({
        username: trimedUserName,
        email: Email,
        uid: UID,
        shopname: ShopName,
      });
      newSeller.save(() => {
        res.status(201).json({
          message: "admin created successfully",
          data: newSeller,
          data2: usrc.user
        });
      });
    } catch (err) {
      const errmsg = err.message;
      res.status(400).json({
        message: errmsg,
      });
    }
};

export default registerAdmin;


