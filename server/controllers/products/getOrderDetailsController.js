import OrderModel from "../../models/order";
const orderDetails = async (req, res) => {
  try {
    const getAllOrder = await OrderModel.find();
    res.status(200).json({
        message: "All products",
        data: getAllOrder
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default orderDetails;
