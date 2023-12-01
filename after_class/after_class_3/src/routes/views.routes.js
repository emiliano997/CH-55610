import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home.hbs");
});

router.get("/realtimeposts", (req, res) => {
  res.render("posts.hbs");
});

export default router;
