import AdminModel from "../../models/adminModel/adminModel";
import Products from "../../models/productsModel";
import SellerModel from "../../models/sellerModel/sellerModel";

const ratingController = async (req, res) => {
  const { id, rating, shopname } = req.body;
  const _rating = Number(rating);

  try {
    // update rating in products model
    await Products.findOneAndUpdate(
      { _id: id },
      { $push: { rating: _rating } },
      { new: true }
    );

    const admin = (await AdminModel.find({ shopname: shopname })) || "";
    const seller = (await SellerModel.find({ shopname: shopname })) || "";

    if (admin != "") {
      const matchedProduct = admin[0].products.filter((data) => {
        if (data._id == id) {
          const newRating = [...data.rating, _rating];
          data.rating = newRating;
          return data;
        } else {
          return;
        }
      });
      const unMatchedProduct = admin[0].products.filter(
        (data) => data._id != id
      );
      const updatedProducts = [...matchedProduct, ...unMatchedProduct];

      const updatedAdmin = await AdminModel.findOneAndUpdate(
        { shopname: shopname },
        { $set: { products: updatedProducts } },
        { new: true }
      );

      res.status(200).json({
        message: "get review successfully"
      });
    } else if (seller != "") {
      const matchedProduct = seller[0].products.filter((data) => {
        if (data._id == id) {
          const newRating = [...data.rating, _rating];
          data.rating = newRating;
          return data;
        } else {
          return;
        }
      });
      const unMatchedProduct = seller[0].products.filter(
        (data) => data._id != id
      );
      const updatedProducts = [...matchedProduct, ...unMatchedProduct];

      const updatedSeller = await SellerModel.findOneAndUpdate(
        { shopname: shopname },
        { $set: { products: updatedProducts } },
        { new: true }
      );

      res.status(200).json({
        message: "get review successfully"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default ratingController;
