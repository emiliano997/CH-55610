import { Router } from "express";
import productsDao from "../daos/dbManager/products.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  const products = await productsDao.getAllProducts();
  res.render("index", {
    products,
  });
});

export default router;
