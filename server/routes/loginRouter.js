import express from "express"
import allControllers from "../controllers"

const router = express.Router()
const { login } = allControllers


//all router operation
router.post('/',login)


export default router