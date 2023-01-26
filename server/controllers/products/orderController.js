import OrderModel from "../../models/order";
import CustomerModel from "../../models/customerModel/customerModel";

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
  } = req.body;

  try {
    const customerArray = await CustomerModel.find({ uid: uid }).select(
      "-v -_id -role -username -email"
    );
    const customerStr = customerArray.toString();
    if (customerStr.includes(uid)) {
      const orderProduct = await new OrderModel({
        name: name,
        images: images,
        price: price,
        quentity: quentity,
        category: category,
        shopname: shopname,
        customeremail: customeremail,
        uid: uid,
      });
      await orderProduct.save();
      const updatedCustomerInformation = await CustomerModel.findOneAndUpdate(
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
