import CustomerModel from "../../models/customerModel/customerModel";
import SellerModel from "../../models/sellerModel/sellerModel";
import AdminModel from "../../models/adminModel/adminModel";
const getAllUser = async (req, res, next) => {
  try {
    const allCustomer = await CustomerModel.find();
    const allSeller = await SellerModel.find();
    const admin = await AdminModel.find()

    res.status(200).json({
      customer: allCustomer,
      seller: allSeller,
      admin: admin
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};
export default getAllUser;
