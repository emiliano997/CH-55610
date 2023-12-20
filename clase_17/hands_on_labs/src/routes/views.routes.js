import { Router } from "express";
import studentModel from "../models/student.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

export default router;
