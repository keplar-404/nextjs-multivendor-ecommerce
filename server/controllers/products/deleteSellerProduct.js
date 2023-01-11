import Products from "../../models/productsModel";

const deleteSellerProduct = async (req, res, next) => {
  const { name, shopname } = req.body;
  const trimedName = name.trim();
  const trimedShopname = shopname.trim();
  const Name = String(trimedName);
  const Shopname = String(trimedShopname);
  try {
    const deletedProduct = await Products.findOneAndDelete({
      name: Name,
      shopname: Shopname,
    });
    if (deletedProduct == null) {
      res.status(400).json({
        message: "Product not found",
      });
      return;
    }
    res.status(200).json({
      msg: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default deleteSellerProduct;
