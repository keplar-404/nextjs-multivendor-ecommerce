import CustomerModel from "../../models/customerModel/customerModel";
import OrderModel from "../../models/order";
const deleverToCustomer = async (req, res) => {
  const { uid, _id } = req.body;
  try {
    const customer = await CustomerModel.find({ uid: uid }).select(
      "-_id -role -username -email -uid -__v"
    );

    // updating order model 
    const order = await OrderModel.findByIdAndUpdate(
        _id,
        { delevered: true },
        { new: true }
    )


    // updating customer order delevered value from false to true
    const d = customer[0].order.filter((data) => {
      if (data._id == _id) {
        return (data.delevered = true);
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
        message: "Product delevered to customer",
        data: order,
        data2: updateCustomer
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default deleverToCustomer;
