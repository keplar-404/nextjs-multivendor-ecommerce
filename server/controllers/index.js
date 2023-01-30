import { home } from "./homeController"
import registerAdmin from "./auth/adminRegister/adminRegisterController"
import registerCustomer from "./auth/customerRegister/customerRegisterController"
import registerSeller from "./auth/sellerRegister/sellerRegisterController"
import login from "./auth/loginController"
import logout from "./auth/logoutController"
import addproduct from "./products/addProduct"
import allProducts from './products/getAllProducts'
import sellerProducts from './products/getSellerProducts'
import findSellerProduct from "./products/findSellerProduct"
import findAdminProduct from "./products/findAdminProduct"
import deleteSellerProduct from "./products/deleteSellerProduct"
import deleteProduct from "./products/deleteProduct"
import getUserController from "./auth/getUserController"
import getAllUser from "./auth/getAllUser"
import addcategory from "./products/addCatagorie"
import getCategory from "./products/getCategory"
import deleteCustomer from "./auth/deleteCustomerController"
import deleteSeller from "./auth/deleteSellerController"
import order from "./products/orderController"
import orderDetails from "./products/getOrderDetailsController"
import deleverToAdmin from "./products/orderDeleverToAdmin"
import deleverToCustomer from "./products/deleverToCustomer"
import updateProfile from "./auth/updateProfile"
import ratingController from "./products/ratingController"



const allControllers = {
    home,
    registerAdmin,
    registerCustomer,
    registerSeller,
    login,
    logout,
    addproduct,
    allProducts,
    sellerProducts,
    findSellerProduct,
    findAdminProduct,
    deleteSellerProduct,
    deleteProduct,
    getUserController,
    getAllUser,
    addcategory,
    getCategory,
    deleteCustomer,
    deleteSeller,
    order,
    orderDetails,
    deleverToAdmin,
    deleverToCustomer,
    updateProfile,
    ratingController
}


export default allControllers