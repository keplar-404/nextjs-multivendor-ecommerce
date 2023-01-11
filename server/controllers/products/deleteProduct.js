import Products from "../../models/productsModel";

const deleteProduct = async (req, res, next) => {
  const { name } = req.body;
  const trimedName = name.trim();
  const Name = String(trimedName);

  try {
   const deletedProduct = await Products.findOneAndDelete({ name: Name });
   if (deletedProduct == null) {
    res.status(400).json({
        message: 'Product not found'
    })
    return
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
export default deleteProduct;
