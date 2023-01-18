import SellerModel from "../../models/sellerModel/sellerModel";
const deleteSeller = async (req, res) => {
  const { username } = req.body;
  try {
    await SellerModel.findOneAndDelete({ username: username });
    res.status(202).json({
      message: "Seller account deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};
export default deleteSeller;
