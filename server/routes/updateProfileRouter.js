import express from "express"
import allControllers from "../controllers"

const router = express.Router()
const { updateProfile } = allControllers


router.post('/', updateProfile)

export default router