import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Ejercicio",
    name: "Eric",
    fileCss: "styles.css",
  });
});

// Desafio
router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register example",
    fileCss: "styles.css",
  });
});

const users = [];

router.post("/user", (req, res) => {
  const { name, email, password } = req.body;

  users.push({
    name,
    email,
    password,
  });

  console.log(users);

  res.render("register_success", {
    user: {
      name,
      email,
    },
    title: "Register success",
    fileCss: "styles.css",
  });
});

export default router;
