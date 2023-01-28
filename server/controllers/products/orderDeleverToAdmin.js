import OrderModel from "../../models/order";
import CustomerModel from "../../models/customerModel/customerModel";
import SellerModel from "../../models/sellerModel/sellerModel";
import AdminModel from "../../models/adminModel/adminModel";
const deleverToAdmin = async (req, res) => {
  const { _id, uid } = req.body;

  try {
    const customer = await CustomerModel.find({ uid: uid }).select(
      "-_id -role -username -email -__v"
    );
    const admin = await AdminModel.find({ uid: uid });
    const seller = await SellerModel.find({ uid: uid });

    const customerSt = customer.toString();
    const adminSt = admin.toString();
    const sellerSt = seller.toString();

    // updating order model
    const order = await OrderModel.findByIdAndUpdate(
      _id,
      { delevertoadmin: true },
      { new: true }
    );

    if (customerSt.includes(uid)) {
      // updating customer order delevered value from false to true
      const d = customer[0].order.filter((data) => {
        if (data._id == _id) {
          return (data.delevertoadmin = true);
        }
      });
      const l = customer[0].order.filter((data) => {
        if (data._id != _id) {
          return data;
        }
      });
      const final = [...d, ...l];
      const updateCustomer = await CustomerModel.findOneAndUpdate(
        { uid: uid },
        { $set: { order: final } },
        { new: true }
      );
      res.json({
        message: "Product delevered to admin",
        data: order,
        data2: updateCustomer,
      });
    } else if (adminSt.includes(uid)) {
      // updating admin order delevered value from false to true
      const d = admin[0].order.filter((data) => {
        if (data._id == _id) {
          return (data.delevertoadmin = true);
        }
      });
      const l = admin[0].order.filter((data) => {
        if (data._id != _id) {
          return data;
        }
      });
      const final = [...d, ...l];
      const updateAdmin = await AdminModel.findOneAndUpdate(
        { uid: uid },
        { $set: { order: final } },
        { new: true }
      );
      res.json({
        message: "Product delevered to admin",
        data: order,
        data2: updateAdmin,
      });
    } else if (sellerSt.includes(uid)) {
      // updating seller order delevered value from false to true
      const d = seller[0].order.filter((data) => {
        if (data._id == _id) {
          return (data.delevertoadmin = true);
        }
      });
      const l = seller[0].order.filter((data) => {
        if (data._id != _id) {
          return data;
        }
      });
      const final = [...d, ...l];
      const updateSeller = await SellerModel.findOneAndUpdate(
        { uid: uid },
        { $set: { order: final } },
        { new: true }
      );
      res.json({
        message: "Product delevered to admin",
        data: order,
        data2: updateSeller,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export default deleverToAdmin;
