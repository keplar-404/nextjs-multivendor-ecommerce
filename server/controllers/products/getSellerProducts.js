import Products from "../../models/productsModel";

const getSellerProducts = async (req, res, next) => {
  const { shopname } = req.body;
  const trimedShopname = shopname.trim();
  const Shopname = String(trimedShopname);
  try {
    const allProducts = await Products.find({ shopname: Shopname });
    const allProductsString = allProducts.toString()
    if (allProductsString.includes(shopname)) {
      res.status(200).json({
        data: allProducts,
      });
    } else if (!allProductsString.includes(shopname)) {
        res.status(200).json({
            message: 'There is no product'
        })
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
export default getSellerProducts;
