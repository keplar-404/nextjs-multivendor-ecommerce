import express from "express";
import allControllers from "../controllers";

const router = express.Router();
const { deleteCustomer, deleteSeller } = allControllers;

//all router operation
router.put("/customer", deleteCustomer);
router.put("/seller", deleteSeller);

export default router;
