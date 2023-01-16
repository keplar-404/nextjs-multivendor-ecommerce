import Products from "../../models/productsModel";
import SellerModel from "../../models/sellerModel/sellerModel";
const addproduct = async (req, res, next) => {
  const {
    name,
    title,
    description,
    images,
    price,
    stock,
    category,
    shopname,
    uid,
  } = req.body;
  

  try {
    const sellerJson = await SellerModel.find({ uid: uid }).select(
      "-_id -__v -uid"
    );
    // //   console.log( sellerJson );
    const seller = sellerJson[0].products;
    // //   console.log( seller );
    // const product = seller.products;
    // //  console.log( sel );

    const newProduct = await new Products({
      name: name,
      title: title,
      description: description,
      images: images,
      price: price,
      stock: stock,
      category: category,
      shopname: shopname,
    });
    await newProduct.save();
    await SellerModel.findOneAndUpdate(
      { uid: uid },
      { $push: { products: newProduct } },
      { new: true }
    );

    res.status(200).json({
      message: "Product created successfully",
      seller: sellerJson,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};
export default addproduct;
