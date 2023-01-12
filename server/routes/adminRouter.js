import express from "express"
import allControllers from "../controllers"

const router = express.Router()
const { registerAdmin } = allControllers


//all router operation
router.post('/register',registerAdmin)


export default router