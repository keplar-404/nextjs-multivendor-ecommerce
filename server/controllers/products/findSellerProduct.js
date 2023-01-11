import Products from "../../models/productsModel";

const findSellerProduct = async (req, res, next) => {
  const { name, shopname } = req.body;
  const trimedName = name.trim();
  const trimedShopname = shopname.trim();
  const Name = String(trimedName);
  const Shopname = String(trimedShopname);
  try {
    const Product = await Products.find({ name: Name, shopname: Shopname });
    const productString = Product.toString();
    if (productString.includes(Name)) {
      res.status(200).json({
        data: Product,
      });
    } else if (!productString.includes(Name)) {
      res.status(200).json({
        message: "There is no product",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export default findSellerProduct;
