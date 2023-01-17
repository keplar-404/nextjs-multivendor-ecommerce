import AdminModel from "../../models/adminModel/adminModel";
import Products from "../../models/productsModel";

const deleteProduct = async (req, res, next) => {
  const { uid, Name, shopname } = req.body;

  try {
    const admin = await AdminModel.find({ uid: uid }).select(
      "-_id -role -totalearning -productpending -productdeliverd -delivertoadmin -order -ordercencle -username -email -uid  -__v -shopname"
    );
   await Products.findOneAndDelete({ name: Name, shopname: shopname });
    const products = admin[0].products;
    const filtered = products.filter((data) => data.name !== Name);

    const result = await AdminModel.findOneAndUpdate(
      { uid: uid },
      { $set: { products: filtered } },
      { new: true }
    );

    res.status(200).json({
      message: "Product delete successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default deleteProduct;
