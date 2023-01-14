import express from "express"
import allControllers from "../controllers"

const router = express.Router()
const { getUserController } = allControllers


//all router operation
router.post('/', getUserController)


export default router