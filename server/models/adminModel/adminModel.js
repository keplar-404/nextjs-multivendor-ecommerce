import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  shopname: {
    type: String,
    required: true
  },
  logo:{
    type: String
  },
  uid: String,
  role: {
    type: String,
    default:"admin"
  },
  totalearning: {
    type: Number,
    default: 0
  },
  products: {
    type: Array,
    default: []
  },
  productpending: {
    type: Number,
    default: 0
  },
  productdeliverd: {
    type: Number,
    default: 0
  }
});

const SellerModel = mongoose.model("Admin", adminSchema);
export default SellerModel;
