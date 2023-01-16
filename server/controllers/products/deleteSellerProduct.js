import SellerModel from "../../models/sellerModel/sellerModel";

const deleteSellerProduct = async (req, res, next) => {
  const { uid, Name } = req.body;

  try {
    const seller = await SellerModel.find({ uid: uid }).select(
      "-_id -role -totalearning -productpending -productdeliverd -delivertoadmin -order -ordercencle -username -email -uid  -__v -shopname"
    );
    const Products = seller[0].products;
    const filtered = Products.filter((data) => data.name !== Name);

    const result = await SellerModel.findOneAndUpdate(
      { uid: uid },
      { $set: { products: filtered } },
      { new: true }
    );
    
    res.status(200).json({
      message: "Product delete successfully",
      data: result
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default deleteSellerProduct;
