import SellerModel from "../../models/sellerModel/sellerModel";

const deleteSellerProduct = async (req, res, next) => {
  const { uid, Name } = req.body;

  try {
    const seller = await SellerModel.find({ uid: uid }).select(
      "-_id -role -totalearning -productpending -productdeliverd -delivertoadmin -order -ordercencle -username -email -uid  -__v -shopname"
    );
    const Products = seller[0].products;
    if (Products.find((data) => data.name !== Name)) {
      res.status(400).json({
        message: "Products not found",
      });
      return;
    }
    if (!seller) {
      res.status(400).json({
        message: "user not found",
      });
      return;
    }

    const filtered = Products.filter((data) => data.name !== Name);

    const result = await SellerModel.findOneAndUpdate(
      { uid: uid },
      { $set: { products: filtered } },
      { new: true }
    );

    res.status(200).json({
      message: "Product deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default deleteSellerProduct;
