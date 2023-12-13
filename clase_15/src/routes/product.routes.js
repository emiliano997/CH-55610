import { Router } from "express";
import productsDao from "../daos/dbManager/products.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  const products = await productsDao.getAllProducts();
  res.json({
    products,
  });
});

router.get("/:id", async (req, res) => {
  const product = await productsDao.getProductById(req.params.id);
  res.json({
    product,
  });
});

router.post("/", async (req, res) => {
  try {
    await productsDao.createProduct(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.json({ info: "Error creating product", error });
  }
});

export default router;
