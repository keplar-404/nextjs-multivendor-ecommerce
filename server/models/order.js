import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: {
    type: String,
  },
  images: {
    type: Array,
    default: [],
  },
  price: {
    type: Number,
  },
  quentity: {
    type: Number,
  },
  category: {
    type: String,
  },
  shopname: {
    type: String,
  },
  delevertoadmin: {
    type: Boolean,
    default: false,
  },
  delevered: {
    type: Boolean,
    default: false,
  },
  customeremail: {
    type: String,
  },
  uid: String,
  order: String,
});

const OrderModel = mongoose.model("order", orderSchema);
export default OrderModel;
