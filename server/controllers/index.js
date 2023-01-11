import { home } from "./homeController"
import registerCustomer from "./auth/customerRegister/customerRegisterController"
import registerSeller from "./auth/sellerRegister/sellerRegisterController"
import login from "./auth/loginController"
import addproduct from "./products/addProduct"
import allProducts from './products/getAllProducts'
import sellerProducts from './products/getSellerProducts'
import findSellerProduct from "./products/findSellerProduct"
import deleteSellerProduct from "./products/deleteSellerProduct"
import deleteProduct from "./products/deleteProduct"



const allControllers = {
    home,
    registerCustomer,
    registerSeller,
    login,
    addproduct,
    allProducts,
    sellerProducts,
    findSellerProduct,
    deleteSellerProduct,
    deleteProduct
}


export default allControllers