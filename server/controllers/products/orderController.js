import OrderModel from "../../models/order";
import CustomerModel from "../../models/customerModel/customerModel";
import SellerModel from "../../models/sellerModel/sellerModel";
import AdminModel from "../../models/adminModel/adminModel";
import Products from "../../models/productsModel";

const order = async (req, res) => {
  const {
    name,
    images,
    price,
    quentity,
    category,
    shopname,
    uid,
    customeremail,
    address,
    mobile,
    nameofthecustomer,
  } = req.body;

  const stockNum = Number(quentity);
  try {
    const orderProduct = await new OrderModel({
      name: name,
      images: images,
      price: price,
      quentity: quentity,
      category: category,
      shopname: shopname,
      uid: uid,
      customeremail: customeremail,
      address: address,
      mobile: mobile,
      nameofthecustomer: nameofthecustomer,
    });
    await orderProduct.save();

    const item = await Products.find({name: name})
    const updateStock = item[0].stock - stockNum

   await Products.findOneAndUpdate(
      { name: name },
      { $set: { stock: updateStock } },
      { new: true }
    );

    const customerArray = await CustomerModel.find({ uid: uid }).select(
      "-v -_id -role -username -email"
    );
    const sellerArray = await SellerModel.find({ uid: uid }).select(
      "-v -_id -role -username -email"
    );
    const adminArray = await AdminModel.find({ uid: uid }).select(
      "-v -_id -role -username -email"
    );

    const customerStr = customerArray.toString();
    const sellerStr = sellerArray.toString();
    const adminStr = adminArray.toString();

    if (customerStr.includes(uid)) {
      const updatedCustomerInformation = await CustomerModel.findOneAndUpdate(
        { uid: uid },
        { $push: { order: orderProduct } },
        { new: true }
      );
      res.status(200).json({
        message: "Your order successfully received",
        data: updatedCustomerInformation,
      });
    } else if (sellerStr.includes(uid)) {
      const updatedCustomerInformation = await SellerModel.findOneAndUpdate(
        { uid: uid },
        { $push: { order: orderProduct } },
        { new: true }
      );
      res.status(200).json({
        message: "Your order successfully received",
        data: updatedCustomerInformation,
      });
    } else if (adminStr.includes(uid)) {
      const updatedCustomerInformation = await AdminModel.findOneAndUpdate(
        { uid: uid },
        { $push: { order: orderProduct } },
        { new: true }
      );
      res.status(200).json({
        message: "Your order successfully received",
        data: updatedCustomerInformation,
      });
    } else {
      res.status(400).json({
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export default order;
