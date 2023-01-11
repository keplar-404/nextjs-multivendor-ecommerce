import express from "express"
import allControllers from "../controllers"

const router = express.Router()
const { addproduct, allProducts, sellerProducts, findSellerProduct, deleteSellerProduct, deleteProduct } = allControllers


//all router operation
router.post('/addproduct',addproduct)

// admin router
router.get('/allproducts',allProducts)
router.post('/deleteproduct', deleteProduct)

// seller router
router.post('/sellerproducts', sellerProducts)
router.post('/findsellerproduct', findSellerProduct)
router.post('/deletesellerproduct', deleteSellerProduct)



export default router