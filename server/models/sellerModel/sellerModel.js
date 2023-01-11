import mongoose from "mongoose";

const sellerSchema = mongoose.Schema({
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
    default:"seller"
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
  },
  delivertoadmin: {
    type: Number,
    default: 0
  }
});

const SellerModel = mongoose.model("Seller", sellerSchema);
export default SellerModel;
