import express from "express"
import allControllers from "../controllers"

const router = express.Router()
const { logout } = allControllers


//all router operation
router.get('/',logout)


export default router