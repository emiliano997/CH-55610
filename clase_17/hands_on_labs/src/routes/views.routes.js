import { Router } from "express";
import studentModel from "../models/student.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/students", async (req, res) => {
  const { page, limit } = req.query;

  const students = await studentModel.paginate(
    {
      // Criterio de busqueda
      group: "1A",
    },
    {
      page: page || 1,
      limit: limit || 10,
    }
  );
  console.log(students);

  res.render("students", {
    students,
  });
});

export default router;
