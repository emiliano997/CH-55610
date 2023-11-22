import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Titulo nuevo nuevo",
    name: "Eric",
    fileCss: "styles.css",
  });
});

// Food

const food = [
  { name: "Pizza", price: 100 },
  { name: "Hamburguesa", price: 80 },
  { name: "Empanada", price: 20 },
  { name: "Milanesa", price: 60 },
  { name: "Fideos", price: 40 },
];

const user = {
  name: "Ivanna",
  role: "user",
};

router.get("/food", (req, res) => {
  res.render("food", {
    title: "Food",
    isAdmin: user.role === "admin",
    food,
    fileCss: "food.css",
  });
});

// Form
router.get("/form", (req, res) => {
  res.render("form", {
    title: "Form example",
    fileCss: "styles.css",
  });
});

const users = [];

router.post("/user", (req, res) => {
  const { name, age } = req.body;

  users.push({
    name,
    age,
  });

  console.log(users);

  res.redirect("/");
});

export default router;
