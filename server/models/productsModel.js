import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
    requird: true,
    default: [],
  },
  price: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Array,
    default: [1],
  },
  stock: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  shopname:{
    type:String
  }
});

const Products = mongoose.model('Product', productsSchema)
export default Products