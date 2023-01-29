import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  order: {
    type: Array,
    default: [],
  },
  uid: String,
  role: {
    type: String,
    default:"user"
  },
  profilepic:{
    type: String,
    default: ""
  }
});

const CustomerModel = mongoose.model("Customer", customerSchema);
export default CustomerModel;
