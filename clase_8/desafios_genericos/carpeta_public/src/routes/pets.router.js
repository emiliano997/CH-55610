import { Router } from "express";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.json({
    pets,
  });
});

router.post("/", (req, res) => {
  const { name, age } = req.body;

  pets.push({
    name,
    age,
  });

  res.json({
    pet: {
      name,
      age,
    },
  });
});

// export { pet_router }
export default router;
