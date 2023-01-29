import AdminModel from "../../models/adminModel/adminModel";
import CustomerModel from "../../models/customerModel/customerModel";
import SellerModel from "../../models/sellerModel/sellerModel";

const updateProfile = async (req, res) => {
  const { profilepic, uid } = req.body;

  try {
    const customerArray = await CustomerModel.find({ uid: uid });
    const sellerArray = await SellerModel.find({ uid: uid });
    const adminArray = await AdminModel.find({ uid: uid });

    const customerStr = customerArray.toString();
    const sellerStr = sellerArray.toString();
    const adminStr = adminArray.toString();

    if (customerStr.includes(uid)) {
      const updated = await CustomerModel.findOneAndUpdate(
        { uid: uid },
        { $set: { profilepic: profilepic } },
        { new: true }
      );
      res.status(200).json({
        message: "profile update successfully",
        data: updated,
      });
    } else if (sellerStr.includes(uid)) {
      const updated = await SellerModel.findOneAndUpdate(
        { uid: uid },
        { $set: { profilepic: profilepic } },
        { new: true }
      );
      res.status(200).json({
        message: "profile update successfully",
        data: updated,
      });
    } else if (adminStr.includes(uid)) {
      const updated = await AdminModel.findOneAndUpdate(
        { uid: uid },
        { $set: { profilepic: profilepic } },
        { new: true }
      );
      res.status(200).json({
        message: "profile update successfully",
        data: updated,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export default updateProfile;
