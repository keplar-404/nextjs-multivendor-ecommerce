import auth from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import SellerModel from "../../../models/sellerModel/sellerModel";

const registerSeller = async (req, res, next) => {
  const { email, password, username, shopname } = req.body;
  const trimedUserName = String(username.trim()) ;
  const trimedShopName =String(shopname.trim()) ;
  const trimedEmail = email.trim();

  const exitsUserNameArray = await SellerModel.find({
    username: trimedUserName
  }).select(
    "-_id -email -__v -uid -role -shopname -totalearning -products -productpending -productdeliverd -delivertoadmin"
  );
  const exitsEmailArray = await SellerModel.find({
    email: trimedEmail,
  }).select("-_id -username -shopname -__v -uid -role -totalearning -products -productpending -productdeliverd -delivertoadmin");
  const exitsShopArray = await SellerModel.find({
    shopname: trimedShopName
  }).select(
    "-_id -email -__v -uid -role -username -totalearning -products -productpending -productdeliverd -delivertoadmin"
  );

  // if i do not convert this exitsUserNameArray, exitsShopArray to string an error will appear
  const exitsUserNameString = exitsUserNameArray.toString();
  const exitsEmailString = exitsEmailArray.toString();
  const exitsShopString = exitsShopArray.toString();
//   console.log(typeof exitsUserNameString);
//   console.log(exitsUserNameString);
//   console.log(typeof exitsShopString);
//   console.log(exitsShopString);
  if (exitsUserNameString.includes(trimedUserName)) {
    res.status(200).json({
      message: "User name has already taken",
      data: exitsUserNameString,
    });
    return;
  }
  if (exitsShopString.includes(trimedShopName)) {
    res.status(200).json({
      message: "Shop name has already taken",
      data: exitsShopString,
    });
    return;
  }
   if (exitsEmailString.includes(trimedEmail)) {
    res.status(200).json({
      message: "Email has already taken",
    });
    return;
  }

    try {
      const usrc = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: 'seller'
      })
      const Email = usrc.user.email;
      const UID = usrc.user.uid;
      const newSeller = new SellerModel({
        username: trimedUserName,
        email: Email,
        uid: UID,
        shopname: trimedShopName,
      });
      newSeller.save(() => {
        res.status(201).json({
          message: "Seller created successfully",
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

export default registerSeller;


