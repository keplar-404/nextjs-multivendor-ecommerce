import express from "express";
import allControllers from "../controllers";

const router = express.Router();
const {
  addproduct,
  allProducts,
  sellerProducts,
  findSellerProduct,
  deleteSellerProduct,
  deleteProduct,
  addcategory,
  getCategory,
  findAdminProduct,
  order,
  orderDetails,
  deleverToAdmin,
  deleverToCustomer,
  ratingController
} = allControllers;

//all router operation
router.post("/addproduct", addproduct);

// admin router
router.get("/allproducts", allProducts);
router.post("/findadminproduct", findAdminProduct);
router.put("/deleteproduct", deleteProduct);

// seller router
router.post("/sellerproducts", sellerProducts);
router.post("/findsellerproduct", findSellerProduct);
router.put("/deletesellerproduct", deleteSellerProduct);

// catagorie router
router.post("/addcategory", addcategory);
router.get("/getcategory", getCategory);

// order router
router.post('/order', order)
router.get('/getallorder', orderDetails)
router.post('/delevertoadmin', deleverToAdmin)
router.post('/delevertocustomer', deleverToCustomer)


// rating controller
router.post('/rating', ratingController)

export default router;
