import Products from "../../models/productsModel";
import SellerModel from "../../models/sellerModel/sellerModel";
import AdminModel from "../../models/adminModel/adminModel";
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
    rating
  } = req.body;

  try {
    // seller
    const sellerJson = await SellerModel.find({ uid: uid }).select(
      "-_id -__v -role -totalearning -products -productpending -productdeliverd -delivertoadmin -order -ordercencle -username -email -shopname"
    );
    const sllerStr = sellerJson.toString();

    // admin
    const adminJson = await AdminModel.find({ uid: uid }).select(
      "-_id -__v -role -totalearning -products -productpending -productdeliverd -order -ordercencle -username -email -shopname"
    );
    const adminStr = adminJson.toString();
    // console.log( sllerStr );
    // console.log( typeof(sllerStr) );

    if (adminStr.includes(uid)) {
      const newProduct = await new Products({
        name: name,
        title: title,
        description: description,
        images: images,
        price: price,
        stock: stock,
        category: category,
        shopname: shopname,
        rating: rating
      });
      await newProduct.save();
      await AdminModel.findOneAndUpdate(
        { uid: uid },
        { $push: { products: newProduct } },
        { new: true }
      );

      res.status(200).json({
        message: "Product created successfully",
        User: "Admin",
      });
    } else if (sllerStr.includes(uid)) {
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
        User: "Seller",
      });
    } else {
      res.status(400).json({
        msg: "User not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};
export default addproduct;
