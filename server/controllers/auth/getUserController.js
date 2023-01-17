import CustomerModel from "../../models/customerModel/customerModel";
import SellerModel from "../../models/sellerModel/sellerModel";
import AdminModel from "../../models/adminModel/adminModel";

const getUserController = async (req, res, next) => {
  const { uid } = req.body;
  // const UID = uid.toString();
  try {
    const customerArray = await CustomerModel.find({ uid: uid }).select(
      "-_id -__v"
    );
    const sellerArray = await SellerModel.find({ uid: uid }).select(
      "-_id -__v"
    );
    const adminArray = await AdminModel.find({ uid: uid }).select("-_id -__v");

    const admin = adminArray.toString()
    const customer = customerArray.toString();
    const seller = sellerArray.toString();
    if (seller.includes(uid)) {
      res.status(200).json(sellerArray);
    } else if (customer.includes(uid)) {
      res.status(200).json(customerArray);
    } else if (admin.includes(uid)){
      res.status(200).json(adminArray)
    }
  } catch (err) {
    res.status(400).json({
      msg: "User not found",
      data: err.message,
    });
  }
};
export default getUserController;
