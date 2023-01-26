import OrderModel from "../../models/order";
import CustomerModel from "../../models/customerModel/customerModel";
const deleverToAdmin = async (req, res) => {
  const { _id, uid } = req.body;

  try {
    const customer = await CustomerModel.find({ uid: uid }).select(
        "-_id -role -username -email -uid -__v"
      );
  
      // updating order model 
      const order = await OrderModel.findByIdAndUpdate(
          _id,
          { delevertoadmin: true },
          { new: true }
      )
  
  
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
          data2: updateCustomer
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export default deleverToAdmin;
