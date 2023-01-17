import AdminModel from "../../models/adminModel/adminModel";

const findAdminProduct = async (req, res, next) => {
  const { name, uid } = req.body;
  const trimedName = name.trim();
  const Name = String(trimedName);
  try {
    const seller = await AdminModel.find({ uid: uid }).select(
      "-_id -role -totalearning -productpending -productdeliverd -delivertoadmin -order -ordercencle -username -email -uid  -__v -shopname"
    );
    const Products = seller[0].products;
    const Product = Products.find((data) => data.name === name);
    if (!Product) {
      res.status(200).json({
        message: "Product not found",
      });
      return;
    } else {
      res.status(200).json({
        data: Product,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default findAdminProduct;
