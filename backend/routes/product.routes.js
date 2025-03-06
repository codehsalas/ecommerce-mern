import express from 'express';
import { getProducts, createProducts, deleteProducts, udpdateProducts } from '../controllers/product.controller.js';

const router = express.Router();
router.use(express.json()); 

router.get("/", getProducts );
router.post("/", createProducts);
router.delete("/:id", deleteProducts )
router.put("/:id", udpdateProducts)


export default router;